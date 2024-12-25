import React, { useState, useEffect } from 'react';
import { Send, AlertTriangle } from 'lucide-react';
import { useContentModeration } from '../hooks/useContentModeration';
import { ContentAnalysis } from '../types';

interface Props {
  onContentSubmit: (content: string, analysis: ContentAnalysis) => void;
}

export const ContentInput: React.FC<Props> = ({ onContentSubmit }) => {
  const [content, setContent] = useState('');
  const { analyzeContent, isLoading, error, loadModel } = useContentModeration();

  useEffect(() => {
    loadModel();
  }, [loadModel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const analysis = await analyzeContent(content);
    if (analysis) {
      onContentSubmit(content, analysis);
      setContent('');
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your content here..."
            className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={4}
          />
          <button
            type="submit"
            disabled={isLoading || !content.trim()}
            className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <AlertTriangle className="w-5 h-5 animate-pulse" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
      {error && (
        <div className="mt-2 p-2 text-sm text-red-600 bg-red-50 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};