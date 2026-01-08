<template>
  <div>
    <MainHeader />
    <section
      class="bg-white pb-8 sm:pb-24 px-5 sm:px-[120px] flex gap-[200px] justify-center items-center pt-[72px] sm:pt-[192px]"
    >
      <div class="w-full sm:w-[546px]">
        <p
          class="mb-3 text-[#333] text-[32px] sm:text-5xl font-semibold leading-[normal]"
        >
          Contact us
        </p>
        <p
          class="mb-6 text-collo-text sm:text-xl leading-6 sm:leading-[normal]"
        >
          Got questions or enquiries to make?
        </p>
        <form action="">
          <div class="sm:flex gap-8">
            <div class="mb-8 w-full">
              <label for="" class="mb-2 text-[#333] font-medium leading-6 block"
                >First Name</label
              >
              <input
                type="text"
                placeholder="First Name"
                class="w-full outline-0 rounded-xl border border-[#E7E4E4] text-[#7D7F85] leading-[21px] py-[18px] px-4"
              />
            </div>
            <div class="mb-8 w-full">
              <label for="" class="mb-2 text-[#333] font-medium leading-6 block"
                >Last Name</label
              >
              <input
                type="text"
                placeholder="Last Name"
                class="w-full outline-0 rounded-xl border border-[#E7E4E4] text-[#7D7F85] leading-[21px] py-[18px] px-4"
              />
            </div>
          </div>
          <div class="mb-8">
            <label for="" class="mb-2 text-[#333] font-medium leading-6 block"
              >Email Address</label
            >
            <input
              type="text"
              placeholder="Enter your email address"
              class="w-full outline-0 rounded-xl border border-[#E7E4E4] text-[#7D7F85] leading-[21px] py-[18px] px-4"
            />
          </div>
          <div class="mb-8">
            <label for="" class="mb-2 text-[#333] font-medium leading-6 block"
              >Message</label
            >
            <textarea
              class="w-full h-[180px] outline-0 rounded-xl border border-[#E7E4E4] text-[#7D7F85] leading-[21px] py-[18px] px-4"
            ></textarea>
          </div>
          <button class="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
      <div class="hidden sm:block">
        <img src="/assets/img/contact.jpg" alt="" />
      </div>
    </section>
    <section
      class="bg-white pt-12 px-5 pb-16 sm:py-24 sm:px-[120px] text-center"
    >
      <p
        class="mb-3 sm:mb-5 text-[#333] text-2xl sm:text-4xl font-semibold leading-[normal]"
      >
        We'd love to hear from you
      </p>
      <p class="mb-8 sm:mb-12 text-collo-text sm:text-xl leading-[normal]">
        Here is our contact details
      </p>
      <ul
        class="flex flex-col sm:flex-row justify-center gap-8 max-w-[1200px] mx-auto"
      >
        <li class="sm:w-[378.67px]">
          <div
            class="w-9 sm:w-12 h-9 sm:h-12 pt-[3.408px] sm:pt-[3.616px] pr-[2.344px] sm:pr-[3.659px] pb-[2.592px] sm:pb-[4.384px] pl-[3.656px] sm:pl-[4.341px] border-[6px] sm:border-8 border-[#F9F5FF] contact-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.6741 2.11621C10.4869 2.11869 8.3899 2.98868 6.84326 4.53532C5.29662 6.08196 4.42663 8.17894 4.42415 10.3662C4.42415 17.4256 11.9241 22.7571 12.2438 22.9803C12.3699 23.0686 12.5202 23.116 12.6741 23.116C12.8281 23.116 12.9784 23.0686 13.1045 22.9803C13.4241 22.7571 20.9241 17.4256 20.9241 10.3662C20.9217 8.17894 20.0517 6.08196 18.505 4.53532C16.9584 2.98868 14.8614 2.11869 12.6741 2.11621ZM12.6741 7.36621C13.2675 7.36621 13.8475 7.54216 14.3409 7.8718C14.8342 8.20145 15.2187 8.66998 15.4458 9.21816C15.6729 9.76634 15.7323 10.3695 15.6165 10.9515C15.5007 11.5334 15.215 12.068 14.7955 12.4875C14.3759 12.9071 13.8414 13.1928 13.2594 13.3086C12.6775 13.4243 12.0743 13.3649 11.5261 13.1378C10.9779 12.9108 10.5094 12.5263 10.1797 12.0329C9.8501 11.5396 9.67415 10.9596 9.67415 10.3662C9.67415 9.57056 9.99022 8.8075 10.5528 8.24489C11.1154 7.68228 11.8785 7.36621 12.6741 7.36621Z"
                fill="#631CBF"
              />
            </svg>
          </div>
          <p
            class="mb-4 text-[#333] text-xl sm:text-2xl font-semibold leading-[normal]"
          >
            Location
          </p>
          <p class="text-[#631CBF] sm:text-xl leading-[normal]">
            8, Audu Ogbe Street, Jabi. FCT
          </p>
        </li>
        <li class="sm:w-[378.67px]">
          <div
            class="w-9 sm:w-12 h-9 sm:h-12 pt-[3.408px] sm:pt-[3.616px] pr-[2.344px] sm:pr-[3.659px] pb-[2.592px] sm:pb-[4.384px] pl-[3.656px] sm:pl-[4.341px] border-[6px] sm:border-8 border-[#F9F5FF] contact-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M10.3002 3.63751C10.3193 3.56613 10.3523 3.4992 10.3973 3.44056C10.4422 3.38192 10.4983 3.33272 10.5623 3.29576C10.6263 3.2588 10.697 3.23482 10.7702 3.22517C10.8435 3.21552 10.9179 3.22041 10.9893 3.23955C12.0321 3.51162 12.9835 4.05675 13.7455 4.81879C14.5076 5.58083 15.0527 6.53223 15.3248 7.57501C15.3439 7.64639 15.3488 7.72084 15.3391 7.7941C15.3295 7.86737 15.3055 7.93801 15.2686 8.002C15.2316 8.06599 15.1824 8.12207 15.1238 8.16704C15.0651 8.21201 14.9982 8.24498 14.9268 8.26408C14.8793 8.27656 14.8304 8.28294 14.7813 8.28306C14.6574 8.2831 14.537 8.24225 14.4387 8.16686C14.3404 8.09147 14.2698 7.98575 14.2377 7.86611C14.016 7.01472 13.5711 6.23789 12.949 5.61572C12.327 4.99354 11.5503 4.54853 10.6989 4.32658C10.6275 4.30756 10.5605 4.27464 10.5017 4.2297C10.443 4.18477 10.3937 4.1287 10.3567 4.0647C10.3197 4.0007 10.2956 3.93003 10.286 3.85673C10.2763 3.78343 10.2811 3.70894 10.3002 3.63751ZM10.1364 6.57658C11.106 6.83533 11.729 7.459 11.9877 8.42861C12.0198 8.54825 12.0904 8.65397 12.1887 8.72936C12.287 8.80475 12.4074 8.8456 12.5313 8.84556C12.5804 8.84544 12.6293 8.83906 12.6768 8.82658C12.7482 8.80748 12.8151 8.77451 12.8738 8.72954C12.9324 8.68457 12.9816 8.62849 13.0186 8.5645C13.0555 8.50051 13.0795 8.42987 13.0891 8.3566C13.0988 8.28334 13.0939 8.20889 13.0748 8.13751C12.7148 6.79033 11.774 5.84955 10.4268 5.48955C10.2827 5.45104 10.1291 5.47137 9.99995 5.54607C9.87079 5.62077 9.7766 5.74372 9.73809 5.88787C9.69958 6.03202 9.71992 6.18556 9.79462 6.31472C9.86932 6.44387 9.99226 6.53807 10.1364 6.57658ZM15.2291 12.1123L11.9167 10.628L11.9076 10.6238C11.7356 10.5502 11.548 10.5207 11.3618 10.5379C11.1756 10.5551 10.9965 10.6184 10.8409 10.7222C10.8226 10.7343 10.805 10.7474 10.7882 10.7616L9.0768 12.2206C7.99258 11.6939 6.87321 10.583 6.34657 9.51283L7.80766 7.77541C7.82173 7.75783 7.83508 7.74025 7.84774 7.72126C7.94929 7.56609 8.01091 7.38821 8.0271 7.20346C8.04329 7.01872 8.01356 6.83284 7.94055 6.66236V6.65392L6.45204 3.33587C6.35553 3.11317 6.18958 2.92765 5.97897 2.80701C5.76835 2.68637 5.52437 2.63708 5.28344 2.6665C4.33069 2.79187 3.45615 3.25977 2.82316 3.98282C2.19018 4.70586 1.84203 5.63459 1.84376 6.59556C1.84376 12.1784 6.38594 16.7206 11.9688 16.7206C12.9297 16.7223 13.8585 16.3741 14.5815 15.7412C15.3045 15.1082 15.7724 14.2336 15.8978 13.2809C15.9273 13.04 15.8781 12.7961 15.7576 12.5855C15.6371 12.3749 15.4517 12.2089 15.2291 12.1123Z"
                fill="#631CBF"
              />
            </svg>
          </div>
          <p
            class="mb-4 text-[#333] text-xl sm:text-2xl font-semibold leading-[normal]"
          >
            Mobile
          </p>
          <p class="text-[#631CBF] sm:text-xl leading-[normal]">
            +23480 9999 2289
          </p>
        </li>
        <li class="sm:w-[378.67px]">
          <div
            class="w-9 sm:w-12 h-9 sm:h-12 pt-[3.408px] sm:pt-[3.616px] pr-[2.344px] sm:pr-[3.659px] pb-[2.592px] sm:pb-[4.384px] pl-[3.656px] sm:pl-[4.341px] border-[6px] sm:border-8 border-[#F9F5FF] contact-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M15.8828 3.53613H2.38281C2.23363 3.53613 2.09055 3.5954 1.98506 3.70089C1.87958 3.80637 1.82031 3.94945 1.82031 4.09863V13.6611C1.82031 13.9595 1.93884 14.2456 2.14982 14.4566C2.3608 14.6676 2.64694 14.7861 2.94531 14.7861H15.3203C15.6187 14.7861 15.9048 14.6676 16.1158 14.4566C16.3268 14.2456 16.4453 13.9595 16.4453 13.6611V4.09863C16.4453 3.94945 16.386 3.80637 16.2806 3.70089C16.1751 3.5954 16.032 3.53613 15.8828 3.53613ZM7.07336 9.16113L2.94531 12.9446V5.37762L7.07336 9.16113ZM7.90586 9.92402L8.74961 10.701C8.85339 10.7962 8.98913 10.8491 9.13 10.8491C9.27087 10.8491 9.40661 10.7962 9.51039 10.701L10.3541 9.92402L14.4323 13.6611H3.82914L7.90586 9.92402ZM11.1923 9.16113L15.3203 5.37691V12.9454L11.1923 9.16113Z"
                fill="#631CBF"
              />
            </svg>
          </div>
          <p
            class="mb-4 text-[#333] text-xl sm:text-2xl font-semibold leading-[normal]"
          >
            Email
          </p>
          <p class="text-[#631CBF] sm:text-xl leading-[normal]">
            hello@hedgeandalpha.com
          </p>
        </li>
      </ul>
    </section>
    <MainFooter />
  </div>
</template>

<style>
.contact-icon {
  margin: auto;
  display: flex;
  margin-bottom: 24px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, #f4ebff 0%, #f4ebff 100%), #fff;
}
</style>
