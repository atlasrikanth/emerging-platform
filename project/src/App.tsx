import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { ContentInput } from './components/ContentInput';
import { ContentList } from './components/ContentList';
import { Post, ContentAnalysis } from './types';
import { useContentModeration } from './hooks/useContentModeration';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { loadModel, isLoading } = useContentModeration();

  useEffect(() => {
    loadModel();
  }, [loadModel]);

  const handleContentSubmit = (content: string, analysis: ContentAnalysis) => {
    const newPost: Post = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      analysis,
      status: analysis.toxic ? 'rejected' : 'approved',
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              Real-time Content Moderation
            </h1>
          </div>

          {isLoading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading moderation model...</p>
            </div>
          ) : (
            <>
              <ContentInput onContentSubmit={handleContentSubmit} />
              <ContentList posts={posts} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;