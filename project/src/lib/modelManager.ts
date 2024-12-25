import * as toxicity from '@tensorflow-models/toxicity';
import { TOXICITY_THRESHOLD, TOXICITY_LABELS } from './constants';

class ModelManager {
  private static instance: ModelManager;
  private model: toxicity.ToxicityClassifier | null = null;

  private constructor() {}

  static getInstance(): ModelManager {
    if (!ModelManager.instance) {
      ModelManager.instance = new ModelManager();
    }
    return ModelManager.instance;
  }

  async getModel(): Promise<toxicity.ToxicityClassifier> {
    if (!this.model) {
      this.model = await toxicity.load(TOXICITY_THRESHOLD, TOXICITY_LABELS);
    }
    return this.model;
  }

  async resetModel(): Promise<void> {
    this.model = null;
  }
}

export const modelManager = ModelManager.getInstance();