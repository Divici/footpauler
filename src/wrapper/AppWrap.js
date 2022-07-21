import {NavigationDots} from "../components";

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      {/* <SocialMedia /> */}
      <div className={`app__wrapper app__flex ${idName === 'home'? '' : 'p-0'}`}>
        <Component />

        <div className={`copyright ${idName === 'home' ? 'hidden' : ''}`}>
          <p className="p-text text-base uppercase text-gray">@2022 Wayofafootpauler</p>
          <p className="p-text text-base uppercase text-gray">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap