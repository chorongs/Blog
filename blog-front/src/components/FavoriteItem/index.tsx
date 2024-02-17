import React from 'react';
import { FavoriteListItem } from 'src/types/interface';
import DeFaultProfileImage from '../../assets/image/default-profile-image.png';
import './style.css';

interface Props {
  favoriteListItem: FavoriteListItem;
}

//          component : Favorite List Item 컴포넌트          //
export default function FavoriteItem({ favoriteListItem }: Props) {
  //          properties         //
  const { profileImage, nickname } = favoriteListItem;

  //          component : Favorite List Item 컴포넌트 랜더링         //
  return (
    <div className='favorite-list-item'>
      <div className='favorite-list-item-profile-box'>
        <div
          className='favorite-list-item-profile-image'
          style={{
            backgroundImage: `url(${
              profileImage ? profileImage : DeFaultProfileImage
            })`,
          }}
        ></div>
      </div>
      <div className='favorite-list-item-nickname'>{nickname}</div>
    </div>
  );
}
