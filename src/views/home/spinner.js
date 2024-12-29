export default {
  data() {
    return {
    isDragging: false,
    startAngle: 0,
    rotation: 0,
    centerX: 0,
    centerY: 0,
    };
  },
  methods: {
    startDrag(event) {
      const rect = event.target.getBoundingClientRect();
      this.centerX = rect.left + rect.width / 2;
      this.centerY = rect.top + rect.height / 2;
      this.isDragging = true;
      this.startAngle = this.calculateAngle(event.clientX, event.clientY);
    },
    onDrag(event) {
      if (this.isDragging) {
        const currentAngle = this.calculateAngle(event.clientX, event.clientY);
        let angleDiff = currentAngle - this.startAngle;

        // Normalize the angle difference to be within -180 to 180 degrees
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;

        // Only update rotation if the angle difference is less than 90 degrees
        if (Math.abs(angleDiff) <= 90) {
          this.rotation += angleDiff;
          this.startAngle = currentAngle;
        }
      }
    },
    endDrag() {
      this.isDragging = false;
    },
    calculateAngle(x, y) {
      const deltaX = x - this.centerX;
      const deltaY = y - this.centerY;
      return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    },
  }
};