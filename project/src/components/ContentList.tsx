import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
import { Post } from '../types';

interface Props {
  posts: Post[];
}

export const ContentList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="w-full max-w-2xl space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className={`p-4 rounded-lg border ${
            post.status === 'approved'
              ? 'border-green-200 bg-green-50'
              : post.status === 'rejected'
              ? 'border-red-200 bg-red-50'
              : 'border-gray-200 bg-white'
          }`}
        >
          <div className="flex items-start justify-between">
            <p className="text-gray-800">{post.content}</p>
            <div className="ml-4">
              {post.status === 'approved' && (
                <Check className="w-5 h-5 text-green-500" />
              )}
              {post.status === 'rejected' && (
                <X className="w-5 h-5 text-red-500" />
              )}
              {post.status === 'pending' && (
                <AlertTriangle className="w-5 h-5 text-yellow-500 animate-pulse" />
              )}
            </div>
          </div>
          {post.analysis && (
            <div className="mt-2 text-sm">
              <p className="text-gray-600">
                Severity: {(post.analysis.severity * 100).toFixed(1)}%
              </p>
              {post.analysis.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {post.analysis.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};