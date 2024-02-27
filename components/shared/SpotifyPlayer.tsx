import React from 'react';

interface SpotifyPlayerProps {
  code: string | undefined;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ code }) => {
  return (
    <div
      className="spotify-player"
      dangerouslySetInnerHTML={{ __html: code || '' }}
    />
  );
};

export default SpotifyPlayer;


