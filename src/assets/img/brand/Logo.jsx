export default function Logo({ white, size, black }) {
  const text = white ? 'white' : 'logo'
  const logo = black ? 'black' : '#EBA944'
  return (
    <svg
      width={size || '830'}
      height={size * 0.3034 || '261'}
      viewBox="0 0 830 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.101562 172V43.1999H69.5016C80.3016 43.1999 89.1682 45.3999 96.1016 49.7999C103.168 54.1999 108.435 60.1332 111.902 67.5999C115.368 74.9332 117.102 83.0666 117.102 91.9999C117.102 101.2 115.102 109.467 111.102 116.8C107.102 124.133 101.502 129.933 94.3016 134.2C87.1016 138.333 78.5682 140.4 68.7016 140.4H43.1016V172H0.101562ZM43.1016 107H58.7016C63.5016 107 67.1016 105.667 69.5016 103C72.0349 100.2 73.3016 96.5332 73.3016 91.9999C73.3016 87.1999 72.1682 83.4666 69.9016 80.7999C67.6349 77.9999 64.1682 76.5999 59.5016 76.5999H43.1016V107Z" fill={logo} />
      <path d="M188.502 174C174.102 174 161.902 171.8 151.902 167.4C141.902 163 134.235 155.933 128.902 146.2C123.702 136.467 121.102 123.667 121.102 107.8C121.102 91.6666 123.702 78.7332 128.902 68.9999C134.235 59.2666 141.902 52.1999 151.902 47.7999C161.902 43.3999 174.102 41.1999 188.502 41.1999C202.902 41.1999 215.102 43.3999 225.102 47.7999C235.102 52.1999 242.702 59.2666 247.902 68.9999C253.235 78.7332 255.902 91.6666 255.902 107.8C255.902 123.667 253.235 136.467 247.902 146.2C242.702 155.933 235.102 163 225.102 167.4C215.102 171.8 202.902 174 188.502 174ZM188.502 137.6C196.768 137.6 202.702 135.267 206.302 130.6C210.035 125.933 211.902 118.333 211.902 107.8C211.902 96.7332 210.035 88.9999 206.302 84.5999C202.702 80.0666 196.768 77.7999 188.502 77.7999C180.102 77.7999 174.035 80.0666 170.302 84.5999C166.702 88.9999 164.902 96.7332 164.902 107.8C164.902 118.333 166.702 125.933 170.302 130.6C174.035 135.267 180.102 137.6 188.502 137.6Z" fill={logo} />
      <path d="M267.875 172V43.1999H310.875V139.2H366.075V172H267.875Z" fill={logo} />
      <path d="M374.125 172V43.1999H417.125V172H374.125Z" fill={logo} />
      <path d="M433.109 172V43.1999H492.509C505.976 43.1999 517.509 45.3999 527.109 49.7999C536.709 54.0666 544.109 60.9999 549.309 70.5999C554.509 80.0666 557.109 92.6666 557.109 108.4C557.109 130.667 551.443 146.867 540.109 157C528.776 167 512.909 172 492.509 172H433.109ZM476.109 139.2H487.309C492.776 139.2 497.443 138.4 501.309 136.8C505.176 135.2 508.109 132.2 510.109 127.8C512.243 123.4 513.309 116.933 513.309 108.4C513.309 99.8666 512.376 93.3999 510.509 88.9999C508.643 84.5999 505.776 81.5999 501.909 79.9999C498.043 78.2666 493.176 77.3999 487.309 77.3999H476.109V139.2Z" fill={logo} />
      <path d="M646.109 33.5999C641.576 33.5999 637.109 32.8666 632.709 31.3999C628.309 29.9332 624.043 28.5332 619.909 27.1999C615.776 25.7332 611.776 24.9999 607.909 24.9999C603.509 24.9999 599.643 25.7332 596.309 27.1999C592.976 28.6666 590.109 30.5999 587.709 32.9999V7.1999C589.576 5.33323 592.309 3.73323 595.909 2.3999C599.509 1.06657 603.309 0.399902 607.309 0.399902C611.976 0.399902 616.376 1.13323 620.509 2.5999C624.643 3.93324 628.709 5.33324 632.709 6.7999C636.843 8.26657 641.109 8.9999 645.509 8.9999C649.909 8.9999 653.709 8.1999 656.909 6.59991C660.243 4.9999 662.709 3.06657 664.309 0.799897V26.7999C662.976 28.5332 660.643 30.1332 657.309 31.5999C653.976 32.9332 650.243 33.5999 646.109 33.5999ZM554.109 172L603.509 43.1999H648.509L698.109 172H653.309L643.309 146.4H608.709L598.909 172H554.109ZM613.909 116.4H638.109L625.909 85.1999L613.909 116.4Z" fill={logo} />
      <path d="M762.525 174C748.125 174 735.925 171.8 725.925 167.4C715.925 163 708.258 155.933 702.925 146.2C697.725 136.467 695.125 123.667 695.125 107.8C695.125 91.6666 697.725 78.7332 702.925 68.9999C708.258 59.2666 715.925 52.1999 725.925 47.7999C735.925 43.3999 748.125 41.1999 762.525 41.1999C776.925 41.1999 789.125 43.3999 799.125 47.7999C809.125 52.1999 816.725 59.2666 821.925 68.9999C827.258 78.7332 829.925 91.6666 829.925 107.8C829.925 123.667 827.258 136.467 821.925 146.2C816.725 155.933 809.125 163 799.125 167.4C789.125 171.8 776.925 174 762.525 174ZM762.525 137.6C770.792 137.6 776.725 135.267 780.325 130.6C784.058 125.933 785.925 118.333 785.925 107.8C785.925 96.7332 784.058 88.9999 780.325 84.5999C776.725 80.0666 770.792 77.7999 762.525 77.7999C754.125 77.7999 748.058 80.0666 744.325 84.5999C740.725 88.9999 738.925 96.7332 738.925 107.8C738.925 118.333 740.725 125.933 744.325 130.6C748.058 135.267 754.125 137.6 762.525 137.6Z" fill={logo} />
      <path d="M4.98743 260L23.0184 212.988H37.5454L55.5764 260H41.2684L37.3264 249.999H23.1644L19.2954 260H4.98743ZM24.9894 240.144H35.5014L30.2454 226.347L24.9894 240.144Z" fill={text} />
      <path d="M119.469 260.73C115.089 260.73 111.22 260.024 107.862 258.613C104.553 257.153 101.949 255.036 100.051 252.262C98.1531 249.439 97.2041 245.984 97.2041 241.896V212.988H110.928V240.436C110.928 246.179 113.775 249.05 119.469 249.05C122.194 249.05 124.287 248.344 125.747 246.933C127.207 245.522 127.937 243.356 127.937 240.436V212.988H141.661V241.896C141.661 245.984 140.712 249.439 138.814 252.262C136.965 255.036 134.361 257.153 131.003 258.613C127.694 260.024 123.849 260.73 119.469 260.73Z" fill={text} />
      <path d="M198.342 260V223.208H185.129V212.988H225.279V223.208H212.066V260H198.342Z" fill={text} />
      <path d="M290.892 260.73C283.105 260.73 277.144 258.832 273.007 255.036C268.919 251.24 266.875 245.108 266.875 236.64C266.875 230.8 267.8 226.104 269.649 222.551C271.498 218.95 274.199 216.346 277.752 214.74C281.353 213.085 285.733 212.258 290.892 212.258C296.051 212.258 300.406 213.085 303.959 214.74C307.56 216.346 310.286 218.95 312.135 222.551C313.984 226.104 314.909 230.8 314.909 236.64C314.909 245.108 312.841 251.24 308.704 255.036C304.567 258.832 298.63 260.73 290.892 260.73ZM290.892 249.05C294.396 249.05 296.927 248.077 298.484 246.13C300.09 244.135 300.893 240.971 300.893 236.64C300.893 232.017 300.09 228.756 298.484 226.858C296.927 224.911 294.396 223.938 290.892 223.938C287.388 223.938 284.833 224.911 283.227 226.858C281.67 228.756 280.891 232.017 280.891 236.64C280.891 240.971 281.67 244.135 283.227 246.13C284.833 248.077 287.388 249.05 290.892 249.05Z" fill={text} />
      <path d="M384.917 260.73C376.4 260.73 369.903 258.637 365.426 254.452C360.948 250.267 358.71 244.354 358.71 236.713C358.71 228.829 360.9 222.794 365.28 218.609C369.66 214.375 376.181 212.258 384.844 212.258C387.764 212.258 390.367 212.477 392.655 212.915C394.942 213.353 397.132 213.961 399.225 214.74V226.712C395.039 224.863 390.562 223.938 385.793 223.938C381.364 223.938 378.079 224.96 375.938 227.004C373.796 228.999 372.725 232.236 372.725 236.713C372.725 241.093 373.845 244.256 376.083 246.203C378.371 248.101 381.656 249.05 385.939 249.05C388.275 249.05 390.538 248.831 392.728 248.393C394.966 247.955 397.181 247.274 399.371 246.349V258.394C397.278 259.124 395.064 259.684 392.728 260.073C390.44 260.511 387.837 260.73 384.917 260.73Z" fill={text} />
      <path d="M444.661 260V212.988H480.285V223.5H458.385V231.165H477.584V241.823H458.385V249.488H480.285V260H444.661Z" fill={text} />
      <path d="M524.804 260V212.988H536.484L554.223 237.881V212.988H567.947V260H556.194L538.528 235.18V260H524.804Z" fill={text} />
      <path d="M624.936 260V223.208H611.723V212.988H651.873V223.208H638.66V260H624.936Z" fill={text} />
      <path d="M695.642 260V212.988H731.266V223.5H709.366V231.165H728.565V241.823H709.366V249.488H731.266V260H695.642Z" fill={text} />
      <path d="M775.785 260V212.988H800.24C804.084 212.988 807.223 213.694 809.657 215.105C812.139 216.516 813.988 218.487 815.205 221.018C816.421 223.5 817.03 226.396 817.03 229.705C817.03 232.868 816.227 235.667 814.621 238.1C813.063 240.485 810.971 242.31 808.343 243.575C808.878 244.013 809.34 244.548 809.73 245.181C810.119 245.765 810.557 246.592 811.044 247.663L816.446 260H802.138L797.174 248.685C796.784 247.809 796.298 247.201 795.714 246.86C795.178 246.471 794.4 246.276 793.378 246.276H789.509V260H775.785ZM789.509 235.764H796.736C798.731 235.764 800.264 235.253 801.335 234.231C802.454 233.16 803.014 231.652 803.014 229.705C803.014 225.568 801.067 223.5 797.174 223.5H789.509V235.764Z" fill={text} />
    </svg>
  )
}
