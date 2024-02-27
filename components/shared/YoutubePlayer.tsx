import React from 'react';

interface YoutubePlayerProps {
  code: string | undefined;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ code }) => {
  return (
    <div
      className="youtube-player"
      dangerouslySetInnerHTML={{ __html: code || '' }}
    />
  );
};

export default YoutubePlayer;

