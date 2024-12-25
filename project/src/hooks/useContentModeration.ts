import { useState, useCallback } from 'react';
import { ContentAnalysis } from '../types';
import { ContentAnalyzer } from '../lib/contentAnalyzer';
import { modelManager } from '../lib/modelManager';

export const useContentModeration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadModel = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      await modelManager.getModel();
    } catch (err) {
      setError('Failed to load moderation model. Please try again.');
      console.error('Error loading model:', err);
      await modelManager.resetModel();
    } finally {
      setIsLoading(false);
    }
  }, []);

  const analyzeContent = useCallback(async (content: string): Promise<ContentAnalysis | null> => {
    try {
      setIsLoading(true);
      setError(null);
      const analysis = await ContentAnalyzer.analyze(content);
      return analysis;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to analyze content';
      setError(errorMessage);
      console.error('Error analyzing content:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    analyzeContent,
    loadModel,
    error
  };
};