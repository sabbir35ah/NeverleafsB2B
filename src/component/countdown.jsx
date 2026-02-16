import Countdown from 'react-countdown';

const ShippingTimer = () => {
  return (
    <div id="est-shipping-timer" className="custom-est-timer-container">
      Place your order before 
      <Countdown 
        date={Date.parse('2026-02-20T15:59:00')}
        renderer={({ hours, minutes, seconds }) => (
          <span className="timeCountdown">
            <div className="hour"><span className="num">{hours.toString().padStart(2,'0')}</span><span className="word">h</span></div>
            <div className="min"><span className="num">{minutes.toString().padStart(2,'0')}</span><span className="word">m</span></div>
            <div className="sec"><span className="num">{seconds.toString().padStart(2,'0')}</span><span className="word">s</span></div>
          </span>
        )}
      />
      , then we will send the artificial plant today with the carrier.
    </div>
  );
};

export default ShippingTimer;
