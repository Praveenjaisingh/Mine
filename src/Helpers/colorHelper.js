exports.getGradient = () => {
  const gradients = [
    ["#ff4d6d", "#ffb703"],
    ["#8ecae6", "#219ebc"],
    ["#f72585", "#7209b7"],
    ["#ff6b6b", "#4ecdc4"]
  ];

  return gradients[Math.floor(Math.random() * gradients.length)];
};