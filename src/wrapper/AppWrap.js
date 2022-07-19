import {NavigationDots} from "../components";

const AppWrap = (Component, idName) => function HOC() {
  return (
    <div id={idName} className={`app__container `}>
      {/* <SocialMedia /> */}
      <div className={`app__wrapper app__flex ${idName === 'home'? '' : 'p-0'}`}>
        <Component />

        <div className={`copyright ${idName === 'home' ? 'hidden' : ''}`}>
          <p className="p-text uppercase text-black">@2022 Wayofafootpauler</p>
          <p className="p-text uppercase text-black">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap