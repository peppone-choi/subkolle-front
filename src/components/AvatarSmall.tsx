import React from 'react';

const AvatarSmall = () => {
  return (
    <div>
      <button>
        <img
          src="https://placehold.co/200x200"
          alt="profile"
          className="translate-y-1 h-12 rounded-full mr-2 object-contain"
        />
      </button>
    </div>
  );
};

export default AvatarSmall;
