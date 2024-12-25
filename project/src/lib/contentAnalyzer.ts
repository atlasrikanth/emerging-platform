import { ContentAnalysis } from '../types';
import { modelManager } from './modelManager';

export class ContentAnalyzer {
  static async analyze(content: string): Promise<ContentAnalysis> {
    if (!content.trim()) {
      throw new Error('Content cannot be empty');
    }

    const model = await modelManager.getModel();
    const predictions = await model.classify([content]);

    if (!predictions || !Array.isArray(predictions)) {
      throw new Error('Invalid model predictions');
    }

    const toxic = predictions.some(p => p.results[0]?.match);
    const categories = predictions
      .filter(p => p.results[0]?.match)
      .map(p => p.label);
    
    const severity = predictions.reduce((acc, p) => 
      acc + (p.results[0]?.match ? p.results[0]?.probabilities[1] : 0), 0) / predictions.length;

    return {
      toxic,
      severity,
      categories,
      timestamp: new Date()
    };
  }
}