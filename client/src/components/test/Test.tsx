import bannerItem from '@assets/images/tsBanner.png';
import background from '@assets/images/background.jpg';

export function Test() {
  console.log('test item');
  return (
    <>
      <div className="test">hello</div>
      <div>
        <img src={bannerItem} />
        <img src={background} />
      </div>
    </>
  );
}
