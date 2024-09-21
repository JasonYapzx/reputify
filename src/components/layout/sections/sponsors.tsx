"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
interface SponsorsProps {
  icon: JSX.Element;
  name: string;
}

const projects: SponsorsProps[] = [
  {
    icon: (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 2000.000000 2000.000000"
        preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M9620 19993 c-1618 -70 -3106 -487 -4485 -1256 -1621 -903 -2964
        -2246 -3873 -3872 -135 -241 -352 -683 -459 -935 -451 -1058 -696 -2089 -785
        -3305 -16 -223 -16 -1027 0 -1250 104 -1409 424 -2607 1018 -3805 209 -423
        401 -754 648 -1123 1668 -2491 4358 -4107 7316 -4396 387 -38 541 -45 995 -45
        545 -1 821 16 1315 80 2451 316 4714 1554 6331 3464 1301 1537 2115 3459 2308
        5450 39 392 45 541 45 1000 0 459 -6 608 -45 1000 -258 2654 -1597 5118 -3699
        6806 -1121 900 -2454 1560 -3846 1903 -802 197 -1620 294 -2439 289 -154 -1
        -309 -3 -345 -5z m-2420 -6878 l0 -1315 2800 0 2800 0 0 1315 0 1315 637 0
        636 0 -6 -3297 c-4 -1814 -7 -3783 -7 -4375 l0 -1078 -630 0 -630 0 0 1345 0
        1345 -2800 0 -2800 0 0 -1345 0 -1345 -635 0 -635 0 0 4375 0 4375 635 0 635
        0 0 -1315z"/>
                  <path d="M7260 10085 l0 -695 2795 0 2795 0 0 695 0 695 -2795 0 -2795 0 0
        -695z"/>
                </g>
              </svg>

    ),
    name: "Hedera",
  },
  {
    icon: (
      <svg width="114" height="21" viewBox="0 0 114 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3763_59327)">
          <path d="M10.0532 2.00249C9.62404 2.40246 9.20226 2.79503 8.78049 3.18574C6.82145 5.00414 4.86242 6.8244 2.90153 8.6391C2.45201 9.05574 1.98583 9.45571 1.42162 9.70014C0.750107 9.99086 0.365328 9.80939 0.148891 9.08536C-0.152642 8.07247 0.00829868 7.12808 0.591015 6.25777C1.08679 5.51707 1.71205 4.90045 2.35396 4.30049C3.37695 3.34499 4.40734 2.39876 5.45068 1.46918C5.90761 1.0618 6.40708 0.689606 7.01754 0.565539C8.84524 0.197044 10.0107 1.94878 10.0551 2.00063L10.0532 2.00249Z" fill="#4779FF" />
          <path d="M1.25879 11.2537C2.37057 10.9333 3.20488 10.2278 4.01698 9.48527C6.60683 7.12246 9.19298 4.75779 11.7939 2.40794C12.3674 1.88946 12.9705 1.39319 13.6087 0.959888C14.4208 0.408071 15.3032 0.328446 16.1726 0.854339C16.4871 1.04322 16.796 1.26357 17.0513 1.52652C17.9374 2.44313 18.8124 3.37455 19.6652 4.32264C20.5717 5.32998 21.4633 6.35214 22.3309 7.39281C22.6287 7.7502 22.8729 8.16683 23.0746 8.58903C23.4501 9.37417 23.3539 10.15 22.897 10.8815C22.4881 11.537 21.9406 12.074 21.3764 12.5832C19.1676 14.5794 16.9588 16.5756 14.7242 18.5439C14.1248 19.0735 13.4644 19.5476 12.7836 19.9661C11.5016 20.7568 10.216 20.6586 9.04684 19.7217C8.36608 19.1772 7.72601 18.568 7.14145 17.9199C5.25826 15.833 3.41021 13.7165 1.54922 11.6092C1.45488 11.5037 1.36978 11.3889 1.25879 11.2518V11.2537Z" fill="#4779FF" />
          <path d="M39.5742 0.914694H42.3824V16.1396H39.5742V14.8564C38.7473 15.9156 37.5708 16.4433 36.0483 16.4433C34.5259 16.4433 33.3309 15.8878 32.2931 14.7786C31.2553 13.6694 30.7373 12.3103 30.7373 10.7011C30.7373 9.09195 31.2553 7.73278 32.2931 6.62359C33.3309 5.5144 34.5814 4.95888 36.0483 4.95888C37.5153 4.95888 38.7473 5.48848 39.5742 6.54582V0.912842V0.914694ZM34.4038 12.9102C34.9773 13.4824 35.6987 13.7694 36.57 13.7694C37.4413 13.7694 38.1591 13.4824 38.7251 12.9102C39.2912 12.338 39.5742 11.601 39.5742 10.703C39.5742 9.80487 39.2912 9.06788 38.7251 8.49569C38.1591 7.92351 37.4413 7.63649 36.57 7.63649C35.6987 7.63649 34.9773 7.92351 34.4038 8.49569C33.8303 9.06788 33.5436 9.80487 33.5436 10.703C33.5436 11.601 33.8303 12.338 34.4038 12.9102Z" fill="#252731" />
          <path d="M51.7665 5.2644H54.7708L50.8028 16.1582C50.2367 17.7118 49.4875 18.8395 48.5514 19.5431C47.6172 20.2468 46.4537 20.5634 45.0625 20.4894V17.8803C45.8173 17.8951 46.4148 17.7358 46.8588 17.4025C47.3009 17.0692 47.6542 16.5322 47.9151 15.7934L43.4531 5.26626H46.5221L49.3598 12.575L51.7684 5.26626L51.7665 5.2644Z" fill="#252731" />
          <path d="M61.9083 4.95888C63.0978 4.95888 64.0819 5.35701 64.857 6.1551C65.634 6.9532 66.0206 8.05498 66.0206 9.46045V16.1378H63.2125V9.80857C63.2125 9.08454 63.0164 8.52902 62.6242 8.14386C62.232 7.76055 61.7104 7.56797 61.0574 7.56797C60.3322 7.56797 59.7513 7.79204 59.3166 8.24201C58.8819 8.69198 58.6636 9.36601 58.6636 10.2641V16.1359H55.8555V5.26072H58.6636V6.47916C59.3462 5.46441 60.4266 4.95703 61.9065 4.95703L61.9083 4.95888Z" fill="#252731" />
          <path d="M76.2432 5.26452H79.0513V16.1398H76.2432V14.8565C75.4015 15.9157 74.2194 16.4434 72.6951 16.4434C71.1708 16.4434 69.9998 15.8879 68.962 14.7787C67.9242 13.6695 67.4062 12.3104 67.4062 10.7012C67.4062 9.09205 67.9242 7.73288 68.962 6.62369C69.9998 5.51451 71.2429 4.95898 72.6951 4.95898C74.2194 4.95898 75.4015 5.48858 76.2432 6.54592V5.26267V5.26452ZM71.0616 12.9103C71.6277 13.4825 72.3455 13.7695 73.2168 13.7695C74.0881 13.7695 74.8095 13.4825 75.383 12.9103C75.9564 12.3381 76.2432 11.6012 76.2432 10.7031C76.2432 9.80497 75.9564 9.06798 75.383 8.4958C74.8095 7.92361 74.0881 7.63659 73.2168 7.63659C72.3455 7.63659 71.6277 7.92361 71.0616 8.4958C70.4956 9.06798 70.2125 9.80497 70.2125 10.7031C70.2125 11.6012 70.4956 12.3381 71.0616 12.9103Z" fill="#252731" />
          <path d="M92.8643 4.95898C94.113 4.95898 95.1101 5.36451 95.8574 6.17743C96.6048 6.99034 96.9785 8.0773 96.9785 9.44018V16.1398H94.1703V9.63647C94.1703 8.98465 94.0112 8.47728 93.6912 8.11434C93.3712 7.7514 92.9216 7.56993 92.3408 7.56993C91.7026 7.56993 91.2049 7.78103 90.8498 8.20137C90.4946 8.62172 90.317 9.23093 90.317 10.029V16.1416H87.5089V9.63832C87.5089 8.98651 87.3498 8.47913 87.0297 8.11619C86.7097 7.75325 86.2602 7.57178 85.6793 7.57178C85.0559 7.57178 84.5583 7.78288 84.1883 8.20322C83.8183 8.62357 83.6333 9.23279 83.6333 10.0309V16.1435H80.8252V5.26822H83.6333V6.42185C84.2863 5.44969 85.2945 4.96454 86.6598 4.96454C88.025 4.96454 88.9814 5.48673 89.6196 6.53111C90.3447 5.48673 91.4269 4.96454 92.8624 4.96454L92.8643 4.95898Z" fill="#252731" />
          <path d="M100.153 3.95904C99.6887 3.95904 99.2854 3.78868 98.945 3.44796C98.6047 3.10724 98.4326 2.70541 98.4326 2.24063C98.4326 1.77584 98.6028 1.37031 98.945 1.02219C99.2854 0.674063 99.6887 0.5 100.153 0.5C100.617 0.5 101.041 0.674063 101.383 1.02219C101.724 1.37031 101.894 1.77584 101.894 2.24063C101.894 2.70541 101.724 3.10724 101.383 3.44796C101.043 3.78868 100.632 3.95904 100.153 3.95904ZM98.7601 16.1397V5.26451H101.568V16.1397H98.7601Z" fill="#252731" />
          <path d="M108.692 16.4434C107.051 16.4434 105.684 15.8935 104.589 14.7898C103.494 13.6881 102.946 12.3252 102.946 10.7012C102.946 9.07724 103.494 7.71436 104.589 6.61258C105.684 5.5108 107.053 4.95898 108.692 4.95898C109.752 4.95898 110.716 5.21267 111.587 5.72005C112.458 6.22742 113.119 6.90886 113.568 7.76436L111.152 9.17723C110.934 8.72726 110.605 8.37173 110.163 8.11064C109.721 7.84954 109.223 7.71992 108.672 7.71992C107.83 7.71992 107.133 7.99953 106.581 8.5569C106.03 9.11613 105.754 9.82904 105.754 10.6994C105.754 11.5697 106.03 12.2622 106.581 12.8196C107.133 13.3788 107.83 13.6566 108.672 13.6566C109.238 13.6566 109.741 13.5307 110.185 13.2751C110.627 13.0214 110.958 12.6696 111.175 12.2196L113.613 13.6121C113.134 14.4676 112.458 15.1528 111.589 15.6676C110.718 16.1823 109.754 16.4397 108.694 16.4397L108.692 16.4434Z" fill="#252731" />
        </g>
        <defs>
          <clipPath id="clip0_3763_59327">
            <rect width="113.613" height="20" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>

    ),
    name: "Dynamic",
  },
  {
    icon: (<svg width="114" height="30" viewBox="0 0 534 135" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_104_1698)">
        <path d="M58.8566 0L0.401611 33.75V101.25L58.8566 135L117.312 101.25V33.75L58.8566 0ZM92.5472 86.9454L58.8674 106.391L25.1876 86.9454V48.0546L58.8674 28.6092L92.5472 48.0546V86.9454Z" fill="#0847F7" />
        <path d="M181.447 101.32C175.642 101.32 170.442 99.9917 165.863 97.3187C161.278 94.6511 157.66 90.8009 155.009 85.7573C152.358 80.7137 151.035 74.6441 151.035 67.5431C151.035 60.4421 152.374 54.2753 155.036 49.2155C157.704 44.1611 161.332 40.3055 165.933 37.6541C170.529 35.0027 175.702 33.6797 181.453 33.6797C185.19 33.6797 188.678 34.2143 191.886 35.2727C195.099 36.3311 197.955 37.8701 200.461 39.8897C202.966 41.9093 205.002 44.3771 206.584 47.2931C208.161 50.2091 209.182 53.5247 209.657 57.2453H196.616C196.319 55.3607 195.747 53.6759 194.893 52.1801C194.035 50.6951 192.955 49.4261 191.648 48.3785C190.336 47.3309 188.845 46.5371 187.188 45.9917C185.519 45.4463 183.705 45.1763 181.728 45.1763C178.251 45.1763 175.189 46.0457 172.532 47.7845C169.881 49.5233 167.807 52.0559 166.322 55.3877C164.832 58.7141 164.086 62.7749 164.086 67.5431C164.086 72.3113 164.837 76.4531 166.338 79.7687C167.845 83.0843 169.908 85.5845 172.548 87.2801C175.189 88.9757 178.234 89.8235 181.674 89.8235C183.591 89.8235 185.373 89.5643 187.02 89.0459C188.667 88.5329 190.152 87.7769 191.464 86.7887C192.771 85.8059 193.873 84.5963 194.758 83.1653C195.644 81.7343 196.265 80.0927 196.616 78.2405H209.657C209.274 81.3293 208.356 84.2669 206.898 87.0371C205.44 89.8019 203.496 92.2589 201.06 94.3919C198.63 96.5303 195.768 98.2097 192.485 99.4571C189.196 100.694 185.519 101.315 181.458 101.315V101.331L181.447 101.32Z" fill="#0847F7" />
        <path d="M229.281 71.6741V100.408H216.639V34.5383H228.93V59.5997H229.551C230.695 56.7431 232.499 54.4859 234.945 52.8335C237.386 51.1865 240.502 50.3549 244.271 50.3549C247.689 50.3549 250.686 51.0893 253.24 52.5635C255.805 54.0377 257.798 56.1599 259.207 58.9301C260.622 61.6949 261.324 65.0483 261.324 68.9687V100.397H248.634V71.0909C248.634 67.9049 247.824 65.4263 246.204 63.6389C244.584 61.8569 242.295 60.9659 239.352 60.9659C237.375 60.9659 235.636 61.3925 234.135 62.2511C232.629 63.1097 231.446 64.3247 230.577 65.8961C229.707 67.4783 229.275 69.3899 229.275 71.6687V71.6795L229.281 71.6741Z" fill="#0847F7" />
        <path d="M283.794 101.385C280.64 101.385 277.821 100.823 275.332 99.7055C272.843 98.5823 270.882 96.9245 269.451 94.7321C268.02 92.5397 267.307 89.8181 267.307 86.5781C267.307 83.8134 267.815 81.5075 268.836 79.677C269.856 77.8463 271.239 76.3722 272.994 75.2381C274.749 74.1041 276.73 73.2456 278.961 72.6731C281.185 72.1007 283.524 71.6957 285.965 71.4581C288.854 71.1611 291.181 70.8912 292.952 70.6428C294.723 70.3944 296.008 69.9947 296.818 69.4493C297.628 68.9039 298.033 68.0993 298.033 67.041V66.8195C298.033 64.6055 297.353 62.8883 296.003 61.6679C294.648 60.4475 292.714 59.832 290.209 59.832C287.557 59.832 285.451 60.4097 283.885 61.5815C282.325 62.7425 281.283 64.1519 280.748 65.7989L268.987 64.5138C269.721 61.5114 271.061 58.9517 272.988 56.8457C274.916 54.7397 277.341 53.1305 280.257 52.0235C283.173 50.9165 286.488 50.3604 290.203 50.3604C292.768 50.3604 295.269 50.6628 297.699 51.2676C300.129 51.867 302.321 52.8281 304.287 54.1457C306.242 55.4579 307.813 57.1913 308.968 59.3405C310.129 61.4951 310.718 64.1142 310.718 67.2137V100.408H298.611V93.5549H298.26C297.488 95.0237 296.467 96.3576 295.166 97.5401C293.87 98.7227 292.277 99.6515 290.393 100.348C288.508 101.045 286.31 101.39 283.805 101.39H283.788L283.794 101.385ZM287.233 92.367C289.415 92.367 291.316 91.9349 292.936 91.0655C294.556 90.1961 295.825 89.0351 296.738 87.5771C297.65 86.1191 298.109 84.5045 298.109 82.7388V77.2091C297.699 77.5061 297.089 77.7708 296.3 78.0084C295.501 78.246 294.605 78.4619 293.6 78.6509C292.601 78.8399 291.607 79.0073 290.635 79.1585C289.663 79.3043 288.794 79.4232 288.027 79.5096C286.348 79.7472 284.868 80.1305 283.583 80.6543C282.298 81.1889 281.288 81.9071 280.554 82.8197C279.819 83.7323 279.447 84.8825 279.447 86.2703C279.447 88.2737 280.176 89.7911 281.634 90.8279C283.092 91.8593 284.955 92.3723 287.223 92.3723H287.228L287.233 92.367Z" fill="#0847F7" />
        <path d="M319.023 100.413V50.9922H331.665V100.413H319.023Z" fill="#0847F7" />
        <path d="M352.622 71.6741V100.408H339.981V50.9814H352.401V59.5998H352.935C354.053 56.7702 355.83 54.5237 358.26 52.8551C360.69 51.1865 363.746 50.3604 367.434 50.3604C370.852 50.3604 373.839 51.0947 376.382 52.5689C378.931 54.0377 380.907 56.1707 382.311 58.9517C383.71 61.7381 384.412 65.0753 384.412 68.9633V100.391H371.77V71.0855C371.77 67.9319 370.955 65.4533 369.319 63.6605C367.688 61.8677 365.436 60.9605 362.574 60.9605C360.63 60.9605 358.908 61.3871 357.423 62.2457C355.932 63.1043 354.766 64.3193 353.907 65.8907C353.049 67.4729 352.627 69.3846 352.627 71.6634V71.6741H352.622Z" fill="#0847F7" />
        <path d="M405.358 31.2983V100.413H392.717V31.2983H405.358Z" fill="#0847F7" />
        <path d="M413.669 100.413V50.9922H426.31V100.413H413.669Z" fill="#0847F7" />
        <path d="M447.262 71.6741V100.408H434.621V50.9814H447.041V59.5998H447.576C448.693 56.7702 450.47 54.5237 452.9 52.8551C455.33 51.1865 458.386 50.3604 462.075 50.3604C465.493 50.3604 468.479 51.0947 471.028 52.5689C473.577 54.0377 475.553 56.1707 476.952 58.9517C478.35 61.7381 479.052 65.0753 479.052 68.9633V100.391H466.411V71.0855C466.411 67.9319 465.595 65.4533 463.959 63.6605C462.328 61.8677 460.077 60.9605 457.215 60.9605C455.271 60.9605 453.548 61.3871 452.063 62.2457C450.573 63.1043 449.406 64.3193 448.548 65.8907C447.689 67.4729 447.262 69.3846 447.262 71.6634V71.6741Z" fill="#0847F7" />
        <path d="M518.262 100.413H533.252L513.515 72.3923L532.231 50.9867H517.56L500.798 70.3079H500.01V34.5383H487.363V100.413H500.01V84.2777L503.973 79.8821L518.262 100.408V100.413Z" fill="#0847F7" />
        <path d="M331.773 31.2983H319.131V43.9397H331.773V31.2983Z" fill="#0847F7" />
        <path d="M426.418 31.2983H413.777V43.9397H426.418V31.2983Z" fill="#0847F7" />
      </g>
      <defs>
        <clipPath id="clip0_104_1698">
          <rect width="532.85" height="135" fill="white" transform="translate(0.401611)" />
        </clipPath>
      </defs>
    </svg>
    ),
    name: "Chainlink"
  },
  {
    icon: (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 2000.000000 2000.000000"
        preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M9620 19993 c-1618 -70 -3106 -487 -4485 -1256 -1621 -903 -2964
        -2246 -3873 -3872 -135 -241 -352 -683 -459 -935 -451 -1058 -696 -2089 -785
        -3305 -16 -223 -16 -1027 0 -1250 104 -1409 424 -2607 1018 -3805 209 -423
        401 -754 648 -1123 1668 -2491 4358 -4107 7316 -4396 387 -38 541 -45 995 -45
        545 -1 821 16 1315 80 2451 316 4714 1554 6331 3464 1301 1537 2115 3459 2308
        5450 39 392 45 541 45 1000 0 459 -6 608 -45 1000 -258 2654 -1597 5118 -3699
        6806 -1121 900 -2454 1560 -3846 1903 -802 197 -1620 294 -2439 289 -154 -1
        -309 -3 -345 -5z m-2420 -6878 l0 -1315 2800 0 2800 0 0 1315 0 1315 637 0
        636 0 -6 -3297 c-4 -1814 -7 -3783 -7 -4375 l0 -1078 -630 0 -630 0 0 1345 0
        1345 -2800 0 -2800 0 0 -1345 0 -1345 -635 0 -635 0 0 4375 0 4375 635 0 635
        0 0 -1315z"/>
                  <path d="M7260 10085 l0 -695 2795 0 2795 0 0 695 0 695 -2795 0 -2795 0 0
        -695z"/>
                </g>
              </svg>

    ),
    name: "Hedera",
  },
  {
    icon: (
      <svg width="114" height="21" viewBox="0 0 114 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3763_59327)">
          <path d="M10.0532 2.00249C9.62404 2.40246 9.20226 2.79503 8.78049 3.18574C6.82145 5.00414 4.86242 6.8244 2.90153 8.6391C2.45201 9.05574 1.98583 9.45571 1.42162 9.70014C0.750107 9.99086 0.365328 9.80939 0.148891 9.08536C-0.152642 8.07247 0.00829868 7.12808 0.591015 6.25777C1.08679 5.51707 1.71205 4.90045 2.35396 4.30049C3.37695 3.34499 4.40734 2.39876 5.45068 1.46918C5.90761 1.0618 6.40708 0.689606 7.01754 0.565539C8.84524 0.197044 10.0107 1.94878 10.0551 2.00063L10.0532 2.00249Z" fill="#4779FF" />
          <path d="M1.25879 11.2537C2.37057 10.9333 3.20488 10.2278 4.01698 9.48527C6.60683 7.12246 9.19298 4.75779 11.7939 2.40794C12.3674 1.88946 12.9705 1.39319 13.6087 0.959888C14.4208 0.408071 15.3032 0.328446 16.1726 0.854339C16.4871 1.04322 16.796 1.26357 17.0513 1.52652C17.9374 2.44313 18.8124 3.37455 19.6652 4.32264C20.5717 5.32998 21.4633 6.35214 22.3309 7.39281C22.6287 7.7502 22.8729 8.16683 23.0746 8.58903C23.4501 9.37417 23.3539 10.15 22.897 10.8815C22.4881 11.537 21.9406 12.074 21.3764 12.5832C19.1676 14.5794 16.9588 16.5756 14.7242 18.5439C14.1248 19.0735 13.4644 19.5476 12.7836 19.9661C11.5016 20.7568 10.216 20.6586 9.04684 19.7217C8.36608 19.1772 7.72601 18.568 7.14145 17.9199C5.25826 15.833 3.41021 13.7165 1.54922 11.6092C1.45488 11.5037 1.36978 11.3889 1.25879 11.2518V11.2537Z" fill="#4779FF" />
          <path d="M39.5742 0.914694H42.3824V16.1396H39.5742V14.8564C38.7473 15.9156 37.5708 16.4433 36.0483 16.4433C34.5259 16.4433 33.3309 15.8878 32.2931 14.7786C31.2553 13.6694 30.7373 12.3103 30.7373 10.7011C30.7373 9.09195 31.2553 7.73278 32.2931 6.62359C33.3309 5.5144 34.5814 4.95888 36.0483 4.95888C37.5153 4.95888 38.7473 5.48848 39.5742 6.54582V0.912842V0.914694ZM34.4038 12.9102C34.9773 13.4824 35.6987 13.7694 36.57 13.7694C37.4413 13.7694 38.1591 13.4824 38.7251 12.9102C39.2912 12.338 39.5742 11.601 39.5742 10.703C39.5742 9.80487 39.2912 9.06788 38.7251 8.49569C38.1591 7.92351 37.4413 7.63649 36.57 7.63649C35.6987 7.63649 34.9773 7.92351 34.4038 8.49569C33.8303 9.06788 33.5436 9.80487 33.5436 10.703C33.5436 11.601 33.8303 12.338 34.4038 12.9102Z" fill="#252731" />
          <path d="M51.7665 5.2644H54.7708L50.8028 16.1582C50.2367 17.7118 49.4875 18.8395 48.5514 19.5431C47.6172 20.2468 46.4537 20.5634 45.0625 20.4894V17.8803C45.8173 17.8951 46.4148 17.7358 46.8588 17.4025C47.3009 17.0692 47.6542 16.5322 47.9151 15.7934L43.4531 5.26626H46.5221L49.3598 12.575L51.7684 5.26626L51.7665 5.2644Z" fill="#252731" />
          <path d="M61.9083 4.95888C63.0978 4.95888 64.0819 5.35701 64.857 6.1551C65.634 6.9532 66.0206 8.05498 66.0206 9.46045V16.1378H63.2125V9.80857C63.2125 9.08454 63.0164 8.52902 62.6242 8.14386C62.232 7.76055 61.7104 7.56797 61.0574 7.56797C60.3322 7.56797 59.7513 7.79204 59.3166 8.24201C58.8819 8.69198 58.6636 9.36601 58.6636 10.2641V16.1359H55.8555V5.26072H58.6636V6.47916C59.3462 5.46441 60.4266 4.95703 61.9065 4.95703L61.9083 4.95888Z" fill="#252731" />
          <path d="M76.2432 5.26452H79.0513V16.1398H76.2432V14.8565C75.4015 15.9157 74.2194 16.4434 72.6951 16.4434C71.1708 16.4434 69.9998 15.8879 68.962 14.7787C67.9242 13.6695 67.4062 12.3104 67.4062 10.7012C67.4062 9.09205 67.9242 7.73288 68.962 6.62369C69.9998 5.51451 71.2429 4.95898 72.6951 4.95898C74.2194 4.95898 75.4015 5.48858 76.2432 6.54592V5.26267V5.26452ZM71.0616 12.9103C71.6277 13.4825 72.3455 13.7695 73.2168 13.7695C74.0881 13.7695 74.8095 13.4825 75.383 12.9103C75.9564 12.3381 76.2432 11.6012 76.2432 10.7031C76.2432 9.80497 75.9564 9.06798 75.383 8.4958C74.8095 7.92361 74.0881 7.63659 73.2168 7.63659C72.3455 7.63659 71.6277 7.92361 71.0616 8.4958C70.4956 9.06798 70.2125 9.80497 70.2125 10.7031C70.2125 11.6012 70.4956 12.3381 71.0616 12.9103Z" fill="#252731" />
          <path d="M92.8643 4.95898C94.113 4.95898 95.1101 5.36451 95.8574 6.17743C96.6048 6.99034 96.9785 8.0773 96.9785 9.44018V16.1398H94.1703V9.63647C94.1703 8.98465 94.0112 8.47728 93.6912 8.11434C93.3712 7.7514 92.9216 7.56993 92.3408 7.56993C91.7026 7.56993 91.2049 7.78103 90.8498 8.20137C90.4946 8.62172 90.317 9.23093 90.317 10.029V16.1416H87.5089V9.63832C87.5089 8.98651 87.3498 8.47913 87.0297 8.11619C86.7097 7.75325 86.2602 7.57178 85.6793 7.57178C85.0559 7.57178 84.5583 7.78288 84.1883 8.20322C83.8183 8.62357 83.6333 9.23279 83.6333 10.0309V16.1435H80.8252V5.26822H83.6333V6.42185C84.2863 5.44969 85.2945 4.96454 86.6598 4.96454C88.025 4.96454 88.9814 5.48673 89.6196 6.53111C90.3447 5.48673 91.4269 4.96454 92.8624 4.96454L92.8643 4.95898Z" fill="#252731" />
          <path d="M100.153 3.95904C99.6887 3.95904 99.2854 3.78868 98.945 3.44796C98.6047 3.10724 98.4326 2.70541 98.4326 2.24063C98.4326 1.77584 98.6028 1.37031 98.945 1.02219C99.2854 0.674063 99.6887 0.5 100.153 0.5C100.617 0.5 101.041 0.674063 101.383 1.02219C101.724 1.37031 101.894 1.77584 101.894 2.24063C101.894 2.70541 101.724 3.10724 101.383 3.44796C101.043 3.78868 100.632 3.95904 100.153 3.95904ZM98.7601 16.1397V5.26451H101.568V16.1397H98.7601Z" fill="#252731" />
          <path d="M108.692 16.4434C107.051 16.4434 105.684 15.8935 104.589 14.7898C103.494 13.6881 102.946 12.3252 102.946 10.7012C102.946 9.07724 103.494 7.71436 104.589 6.61258C105.684 5.5108 107.053 4.95898 108.692 4.95898C109.752 4.95898 110.716 5.21267 111.587 5.72005C112.458 6.22742 113.119 6.90886 113.568 7.76436L111.152 9.17723C110.934 8.72726 110.605 8.37173 110.163 8.11064C109.721 7.84954 109.223 7.71992 108.672 7.71992C107.83 7.71992 107.133 7.99953 106.581 8.5569C106.03 9.11613 105.754 9.82904 105.754 10.6994C105.754 11.5697 106.03 12.2622 106.581 12.8196C107.133 13.3788 107.83 13.6566 108.672 13.6566C109.238 13.6566 109.741 13.5307 110.185 13.2751C110.627 13.0214 110.958 12.6696 111.175 12.2196L113.613 13.6121C113.134 14.4676 112.458 15.1528 111.589 15.6676C110.718 16.1823 109.754 16.4397 108.694 16.4397L108.692 16.4434Z" fill="#252731" />
        </g>
        <defs>
          <clipPath id="clip0_3763_59327">
            <rect width="113.613" height="20" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>

    ),
    name: "Dynamic",
  },
  {
    icon: (<svg width="114" height="30" viewBox="0 0 534 135" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_104_1698)">
        <path d="M58.8566 0L0.401611 33.75V101.25L58.8566 135L117.312 101.25V33.75L58.8566 0ZM92.5472 86.9454L58.8674 106.391L25.1876 86.9454V48.0546L58.8674 28.6092L92.5472 48.0546V86.9454Z" fill="#0847F7" />
        <path d="M181.447 101.32C175.642 101.32 170.442 99.9917 165.863 97.3187C161.278 94.6511 157.66 90.8009 155.009 85.7573C152.358 80.7137 151.035 74.6441 151.035 67.5431C151.035 60.4421 152.374 54.2753 155.036 49.2155C157.704 44.1611 161.332 40.3055 165.933 37.6541C170.529 35.0027 175.702 33.6797 181.453 33.6797C185.19 33.6797 188.678 34.2143 191.886 35.2727C195.099 36.3311 197.955 37.8701 200.461 39.8897C202.966 41.9093 205.002 44.3771 206.584 47.2931C208.161 50.2091 209.182 53.5247 209.657 57.2453H196.616C196.319 55.3607 195.747 53.6759 194.893 52.1801C194.035 50.6951 192.955 49.4261 191.648 48.3785C190.336 47.3309 188.845 46.5371 187.188 45.9917C185.519 45.4463 183.705 45.1763 181.728 45.1763C178.251 45.1763 175.189 46.0457 172.532 47.7845C169.881 49.5233 167.807 52.0559 166.322 55.3877C164.832 58.7141 164.086 62.7749 164.086 67.5431C164.086 72.3113 164.837 76.4531 166.338 79.7687C167.845 83.0843 169.908 85.5845 172.548 87.2801C175.189 88.9757 178.234 89.8235 181.674 89.8235C183.591 89.8235 185.373 89.5643 187.02 89.0459C188.667 88.5329 190.152 87.7769 191.464 86.7887C192.771 85.8059 193.873 84.5963 194.758 83.1653C195.644 81.7343 196.265 80.0927 196.616 78.2405H209.657C209.274 81.3293 208.356 84.2669 206.898 87.0371C205.44 89.8019 203.496 92.2589 201.06 94.3919C198.63 96.5303 195.768 98.2097 192.485 99.4571C189.196 100.694 185.519 101.315 181.458 101.315V101.331L181.447 101.32Z" fill="#0847F7" />
        <path d="M229.281 71.6741V100.408H216.639V34.5383H228.93V59.5997H229.551C230.695 56.7431 232.499 54.4859 234.945 52.8335C237.386 51.1865 240.502 50.3549 244.271 50.3549C247.689 50.3549 250.686 51.0893 253.24 52.5635C255.805 54.0377 257.798 56.1599 259.207 58.9301C260.622 61.6949 261.324 65.0483 261.324 68.9687V100.397H248.634V71.0909C248.634 67.9049 247.824 65.4263 246.204 63.6389C244.584 61.8569 242.295 60.9659 239.352 60.9659C237.375 60.9659 235.636 61.3925 234.135 62.2511C232.629 63.1097 231.446 64.3247 230.577 65.8961C229.707 67.4783 229.275 69.3899 229.275 71.6687V71.6795L229.281 71.6741Z" fill="#0847F7" />
        <path d="M283.794 101.385C280.64 101.385 277.821 100.823 275.332 99.7055C272.843 98.5823 270.882 96.9245 269.451 94.7321C268.02 92.5397 267.307 89.8181 267.307 86.5781C267.307 83.8134 267.815 81.5075 268.836 79.677C269.856 77.8463 271.239 76.3722 272.994 75.2381C274.749 74.1041 276.73 73.2456 278.961 72.6731C281.185 72.1007 283.524 71.6957 285.965 71.4581C288.854 71.1611 291.181 70.8912 292.952 70.6428C294.723 70.3944 296.008 69.9947 296.818 69.4493C297.628 68.9039 298.033 68.0993 298.033 67.041V66.8195C298.033 64.6055 297.353 62.8883 296.003 61.6679C294.648 60.4475 292.714 59.832 290.209 59.832C287.557 59.832 285.451 60.4097 283.885 61.5815C282.325 62.7425 281.283 64.1519 280.748 65.7989L268.987 64.5138C269.721 61.5114 271.061 58.9517 272.988 56.8457C274.916 54.7397 277.341 53.1305 280.257 52.0235C283.173 50.9165 286.488 50.3604 290.203 50.3604C292.768 50.3604 295.269 50.6628 297.699 51.2676C300.129 51.867 302.321 52.8281 304.287 54.1457C306.242 55.4579 307.813 57.1913 308.968 59.3405C310.129 61.4951 310.718 64.1142 310.718 67.2137V100.408H298.611V93.5549H298.26C297.488 95.0237 296.467 96.3576 295.166 97.5401C293.87 98.7227 292.277 99.6515 290.393 100.348C288.508 101.045 286.31 101.39 283.805 101.39H283.788L283.794 101.385ZM287.233 92.367C289.415 92.367 291.316 91.9349 292.936 91.0655C294.556 90.1961 295.825 89.0351 296.738 87.5771C297.65 86.1191 298.109 84.5045 298.109 82.7388V77.2091C297.699 77.5061 297.089 77.7708 296.3 78.0084C295.501 78.246 294.605 78.4619 293.6 78.6509C292.601 78.8399 291.607 79.0073 290.635 79.1585C289.663 79.3043 288.794 79.4232 288.027 79.5096C286.348 79.7472 284.868 80.1305 283.583 80.6543C282.298 81.1889 281.288 81.9071 280.554 82.8197C279.819 83.7323 279.447 84.8825 279.447 86.2703C279.447 88.2737 280.176 89.7911 281.634 90.8279C283.092 91.8593 284.955 92.3723 287.223 92.3723H287.228L287.233 92.367Z" fill="#0847F7" />
        <path d="M319.023 100.413V50.9922H331.665V100.413H319.023Z" fill="#0847F7" />
        <path d="M352.622 71.6741V100.408H339.981V50.9814H352.401V59.5998H352.935C354.053 56.7702 355.83 54.5237 358.26 52.8551C360.69 51.1865 363.746 50.3604 367.434 50.3604C370.852 50.3604 373.839 51.0947 376.382 52.5689C378.931 54.0377 380.907 56.1707 382.311 58.9517C383.71 61.7381 384.412 65.0753 384.412 68.9633V100.391H371.77V71.0855C371.77 67.9319 370.955 65.4533 369.319 63.6605C367.688 61.8677 365.436 60.9605 362.574 60.9605C360.63 60.9605 358.908 61.3871 357.423 62.2457C355.932 63.1043 354.766 64.3193 353.907 65.8907C353.049 67.4729 352.627 69.3846 352.627 71.6634V71.6741H352.622Z" fill="#0847F7" />
        <path d="M405.358 31.2983V100.413H392.717V31.2983H405.358Z" fill="#0847F7" />
        <path d="M413.669 100.413V50.9922H426.31V100.413H413.669Z" fill="#0847F7" />
        <path d="M447.262 71.6741V100.408H434.621V50.9814H447.041V59.5998H447.576C448.693 56.7702 450.47 54.5237 452.9 52.8551C455.33 51.1865 458.386 50.3604 462.075 50.3604C465.493 50.3604 468.479 51.0947 471.028 52.5689C473.577 54.0377 475.553 56.1707 476.952 58.9517C478.35 61.7381 479.052 65.0753 479.052 68.9633V100.391H466.411V71.0855C466.411 67.9319 465.595 65.4533 463.959 63.6605C462.328 61.8677 460.077 60.9605 457.215 60.9605C455.271 60.9605 453.548 61.3871 452.063 62.2457C450.573 63.1043 449.406 64.3193 448.548 65.8907C447.689 67.4729 447.262 69.3846 447.262 71.6634V71.6741Z" fill="#0847F7" />
        <path d="M518.262 100.413H533.252L513.515 72.3923L532.231 50.9867H517.56L500.798 70.3079H500.01V34.5383H487.363V100.413H500.01V84.2777L503.973 79.8821L518.262 100.408V100.413Z" fill="#0847F7" />
        <path d="M331.773 31.2983H319.131V43.9397H331.773V31.2983Z" fill="#0847F7" />
        <path d="M426.418 31.2983H413.777V43.9397H426.418V31.2983Z" fill="#0847F7" />
      </g>
      <defs>
        <clipPath id="clip0_104_1698">
          <rect width="532.85" height="135" fill="white" transform="translate(0.401611)" />
        </clipPath>
      </defs>
    </svg>
    ),
    name: "Chainlink"
  }
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">Our Target Projects</h2>

      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]" pauseOnHover>
          {projects.map(({ icon, name }) => (
            <div key={name} className="flex items-center text-xl md:text-2xl font-medium">
              <div className="mr-2">{icon}</div> {/* Render SVG icon */}
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default SponsorsSection;