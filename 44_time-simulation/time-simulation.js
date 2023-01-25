class TimeSimulation {
  constructor(time) {
    this.real_time = time || 0;
    this.speed = 1;
    this.simulated_time = time || 0;
  }

  get() {
    return this.simulated_time;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  update(newRealTime) {
    let timeDifference = Math.abs(newRealTime - this.real_time);
    this.simulated_time += timeDifference * this.speed;
    this.real_time = newRealTime;
  }
}

export { TimeSimulation };
