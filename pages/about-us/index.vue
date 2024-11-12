<template>
    <div>
        <MainHeader />
        <section class="bg-white px-5 pt-8 pb-16 sm:py-24 text-center">
            <p class="mb-2 sm:mb-3 text-[#631CBF] font-semibold leading-6">About us</p>
            <p class="mb-4 sm:mb-6 text-collo-heading text-[32px] sm:text-5xl font-semibold leading-10 sm:leading-[60px]">
                About the company
            </p>
            <p class="text-[#667085] sm:text-xl leading-6 sm:leading-[30px]">Learn more about the company and the team behind it.</p>
        </section>
        <section class="pt-6 px-5 pb-12 sm:py-24 bg-collo-grey-50">
            <div class="max-w-[1203px] mx-auto flex flex-col sm:flex-row gap-8 sm:gap-24 items-center">
                <div><img src="/assets/img/who-we-are.png" alt=""></div>
                <div class="max-w-[552px]">
                    <p class="mb-2 text-[#631CBF] font-semibold leading-6">A little about us</p>
                    <p class="mb-4 sm:mb-6 text-[#333] text-2xl sm:text-[40px] font-semibold leading-[31px] sm:leading-[50px]">
                        Who are we?
                    </p>
                    <div class="text-collo-text sm:text-xl leading-6 sm:leading-[30px]">
                        <p class="mb-9">
                            Hedge and Alpha is a financial services firm that allows you access investment options that significantly
                            reduce the risk of losing your money. We explore alternative investment solutions and leverage technology
                            to help our clients get greater value for their money. We cater to individuals, institutions and businesses alike. 
                        </p>
                        <p>
                            Our process is driven by an endless pursuit to understand how the world's markets and economies work. The
                            technology we adapt and expertise we have helps us validate universal investment principles and effortlessly
                            execute our clients' needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <AsFeaturedIn class="pt-[42px] sm:pt-8 pb-16 sm:pb-0" />
        <section class="bg-white pt-10 sm:pt-24 sm:pb-[72px] px-5 sm:px-[121px]">
            <div class="flex flex-col sm:flex-row gap-6 sm:gap-[60px] items-center max-w-[1198px] mx-auto">
                <div><img src="/assets/img/mission.png" alt=""></div>
                <ul class="max-w-[562px]">
                    <li class="py-4 sm:py-5 pl-5 sm:pl-6 border-l-4 border-[#631CBF]">
                        <p class="mb-2 text-[#333] text-lg sm:text-[22px] font-semibold leading-[normal]">
                            Our Mission
                        </p>
                        <p class="text-collo-text sm:text-lg leading-6 sm:leading-[30px]">
                            To give individuals and businesses the opportunities and support they need to
                            make the right financial decisions in an ever-changing world. We want to be a
                            navigator in the face of uncertainty, and the go-to for innovative financial solutions.
                        </p>
                    </li>
                    <li class="py-4 sm:py-5 pl-5 sm:pl-6 border-l-4 border-collo-grey">
                        <p class="mb-2 text-[#333] text-lg sm:text-[22px] font-semibold leading-[normal]">
                            Our Purpose
                        </p>
                        <p class="text-collo-text sm:text-lg leading-6 sm:leading-[30px]">
                            We go beyond traditional investment classes, providing alternative opportunities that
                            drive positive and lasting impact for institutions and individuals.
                        </p>
                    </li>
                    <li class="py-4 sm:py-5 pl-5 sm:pl-6 border-l-4 border-collo-grey">
                        <p class="mb-2 text-[#333] text-lg sm:text-[22px] font-semibold leading-[normal]">
                            Our Vision
                        </p>
                        <p class="text-collo-text sm:text-lg leading-6 sm:leading-[30px]">
                            To be the leading and most trusted financial services firm in Africa that provides the
                            investment solutions which helps our clients achieve short and long-term financial goals.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <section class="bg-white py-[72px] sm:py-[96px] px-5 sm:px-[182px]">
            <div class="text-center">
                <p class="mb-6 text-collo-heading text-2xl sm:text-[40px] font-semibold leading-[normal] sm:leading-[50px]">
                    The values we live by
                </p>
                <p class="mb-6 sm:mb-12 text-collo-text sm:text-xl leading-[21px] sm:leading-[30px] max-w-[868px] mx-auto">
                    We are building a community of people who want to grow their wealth and enjoy exclusive access to first-class saving and investment opportunities.
                </p>
            </div>
            <div class="max-w-[1076px] mx-auto flex flex-col sm:flex-row gap-5 sm:gap-7">
                <div class="p-5 rounded-xl border border-[#E2E8F0] bg-[rgba(255,241,235,0.50)]">
                    <div class="mb-5 w-8 sm:w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 48 48" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z" fill="#FD9264"/>
                        </svg>
                    </div>
                    <p class="mb-4 text-[#333] text-lg sm:text-xl font-semibold leading-6 sm:leading-[26px]">
                        Full transparency with automated financial tools
                    </p>
                    <p class="text-collo-heading leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. consectetur adipiscing elit. Suspendisse varius
                    </p>
                </div>
                <div class="p-5 rounded-xl border border-[#E2E8F0] bg-[rgba(238,251,238,0.60)]">
                    <div class="mb-5 w-8 sm:w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 48 48" fill="none">
                            <path d="M20.162 8.17799C21.222 8.90999 22.236 9.39199 23.07 9.49799C22.6122 10.4047 22.2953 11.3758 22.13 12.378C20.786 12.08 19.508 11.37 18.458 10.646C17.9552 10.2972 17.4687 9.92544 17 9.53199V14C16.9997 14.299 16.91 14.5911 16.7425 14.8387C16.5751 15.0864 16.3374 15.2784 16.06 15.39L16.048 15.396C15.9359 15.442 15.8251 15.4913 15.716 15.544C15.482 15.654 15.142 15.824 14.744 16.052C13.7664 16.6027 12.8643 17.2776 12.06 18.06C11.154 18.966 10.594 20.186 10.28 21.132C9.874 22.344 8.842 23.462 7.374 23.708C7.26978 23.7254 7.17509 23.7792 7.10665 23.8597C7.03821 23.9402 7.00044 24.0423 7 24.148V27.656C7 27.986 7.24 28.268 7.566 28.322C8.814 28.53 9.796 29.346 10.35 30.334C11.0873 31.6516 11.9988 32.8639 13.06 33.938C13.9745 34.8264 15.0505 35.5317 16.23 36.016C16.7313 36.2271 17.249 36.397 17.778 36.524L17.788 36.528C18.1294 36.5948 18.4369 36.7781 18.658 37.0466C18.8791 37.3152 19 37.6522 19 38V40.5C19 40.776 19.224 41 19.5 41H22C22 40.2043 22.3161 39.4413 22.8787 38.8787C23.4413 38.3161 24.2044 38 25 38H29C29.7956 38 30.5587 38.3161 31.1213 38.8787C31.6839 39.4413 32 40.2043 32 41H34.5C34.6326 41 34.7598 40.9473 34.8536 40.8535C34.9473 40.7598 35 40.6326 35 40.5V36C35 35.434 35.32 34.916 35.824 34.66L35.85 34.646L35.99 34.566C36.12 34.488 36.318 34.366 36.56 34.19C37.044 33.838 37.702 33.292 38.36 32.524C39.666 31.002 41 28.588 41 25C41 22.986 40.624 21.36 39.982 20.024C40.6969 19.0764 41.2373 18.0091 41.578 16.872C41.778 17.144 41.966 17.426 42.142 17.718C43.35 19.716 44 22.126 44 24.998C44 29.412 42.334 32.498 40.64 34.476C39.8685 35.3774 38.9808 36.1723 38 36.84V40.498C38.0003 40.9578 37.9099 41.4131 37.7342 41.838C37.5584 42.2629 37.3006 42.6489 36.9756 42.9742C36.6506 43.2994 36.2646 43.5574 35.8399 43.7334C35.4151 43.9094 34.9598 44 34.5 44H32C31.2044 44 30.4413 43.6839 29.8787 43.1213C29.3161 42.5587 29 41.7956 29 41H25C25 41.7956 24.6839 42.5587 24.1213 43.1213C23.5587 43.6839 22.7956 44 22 44H19.5C18.5717 44 17.6815 43.6312 17.0251 42.9749C16.3687 42.3185 16 41.4282 16 40.5V39.134C15.6866 39.0283 15.3771 38.9116 15.072 38.784C13.5329 38.149 12.1302 37.2242 10.94 36.06C9.68445 34.7891 8.60484 33.3557 7.73 31.798C7.66517 31.6688 7.57256 31.5555 7.4588 31.4663C7.34504 31.3771 7.21295 31.3141 7.072 31.282C6.21396 31.1383 5.43459 30.6952 4.87221 30.0314C4.30983 29.3676 4.00081 28.526 4 27.656V24.15C4 22.464 5.22 21.026 6.88 20.75C7.054 20.72 7.312 20.546 7.434 20.182C7.818 19.028 8.564 17.314 9.94 15.938C10.9325 14.967 12.0472 14.1293 13.256 13.446C13.5307 13.29 13.7787 13.1567 14 13.046V7.33999C14 5.46399 16.26 4.69399 17.48 5.90799C18.14 6.56599 19.1 7.44199 20.162 8.17599M26.14 17.694C25.16 17.288 24.332 16.516 24.136 15.474C23.7795 13.5326 24.153 11.5279 25.1846 9.84515C26.2163 8.16236 27.8333 6.9201 29.7252 6.35704C31.617 5.79398 33.6502 5.94982 35.4341 6.79463C37.218 7.63944 38.6269 9.11363 39.39 10.934C40.0937 12.6303 40.1924 14.5171 39.6694 16.2776C39.1464 18.038 38.0337 19.565 36.518 20.602C35.642 21.2 34.512 21.16 33.532 20.754L26.14 17.694ZM34.928 18.054C35.9158 17.3338 36.6059 16.277 36.8679 15.0829C37.1298 13.8889 36.9457 12.6402 36.3501 11.5726C35.7546 10.505 34.7888 9.6924 33.6351 9.28809C32.4815 8.88377 31.2197 8.91575 30.088 9.37799C29.0475 9.80818 28.1826 10.577 27.6334 11.5599C27.0842 12.5429 26.8829 13.6824 27.062 14.794L27.104 14.826C27.1618 14.8643 27.2235 14.8965 27.288 14.922L34.68 17.982C34.7593 18.0159 34.8427 18.0395 34.928 18.052M18 20C18 20.5304 17.7893 21.0391 17.4142 21.4142C17.0391 21.7893 16.5304 22 16 22C15.4696 22 14.9609 21.7893 14.5858 21.4142C14.2107 21.0391 14 20.5304 14 20C14 19.4696 14.2107 18.9609 14.5858 18.5858C14.9609 18.2107 15.4696 18 16 18C16.5304 18 17.0391 18.2107 17.4142 18.5858C17.7893 18.9609 18 19.4696 18 20Z" fill="#049F0A"/>
                        </svg>
                    </div>
                    <p class="mb-4 text-[#333] text-lg sm:text-xl font-semibold leading-6 sm:leading-[26px]">
                        Earn high interest on your savings
                    </p>
                    <p class="text-collo-heading leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. consectetur adipiscing elit. Suspendisse varius
                    </p>
                </div>
                <div class="p-5 rounded-xl border border-[#E2E8F0] bg-[rgba(225,230,255,0.50)]">
                    <div class="mb-5 w-8 sm:w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 48 48" fill="none">
                            <path d="M24 25C22.1435 25 20.363 25.7375 19.0503 27.0503C17.7375 28.363 17 30.1435 17 32C17 33.8565 17.7375 35.637 19.0503 36.9497C20.363 38.2625 22.1435 39 24 39C25.8565 39 27.637 38.2625 28.9497 36.9497C30.2625 35.637 31 33.8565 31 32C31 30.1435 30.2625 28.363 28.9497 27.0503C27.637 25.7375 25.8565 25 24 25ZM21 32C21 31.2044 21.3161 30.4413 21.8787 29.8787C22.4413 29.3161 23.2044 29 24 29C24.7956 29 25.5587 29.3161 26.1213 29.8787C26.6839 30.4413 27 31.2044 27 32C27 32.7956 26.6839 33.5587 26.1213 34.1213C25.5587 34.6839 24.7956 35 24 35C23.2044 35 22.4413 34.6839 21.8787 34.1213C21.3161 33.5587 21 32.7956 21 32Z" fill="#8095FF"/>
                            <path d="M35.052 10.2319L28.694 1.31787L5.316 19.9939L4.02 19.9799V19.9999H3V43.9999H45V19.9999H43.076L39.248 8.80187L35.052 10.2319ZM38.85 19.9999H18.794L33.732 14.9079L36.776 13.9339L38.85 19.9999ZM31.1 11.5799L15.68 16.8359L27.892 7.07987L31.1 11.5799ZM7 36.3379V27.6579C7.84435 27.3599 8.6113 26.8767 9.24461 26.2437C9.87792 25.6107 10.3615 24.8441 10.66 23.9999H37.34C37.6382 24.8444 38.1217 25.6115 38.755 26.2448C39.3884 26.8782 40.1554 27.3617 41 27.6599V36.3399C40.1554 36.6381 39.3884 37.1216 38.755 37.7549C38.1217 38.3882 37.6382 39.1553 37.34 39.9999H10.664C10.3644 39.1552 9.87993 38.3881 9.24604 37.7546C8.61215 37.1211 7.8448 36.637 7 36.3379Z" fill="#8095FF"/>
                        </svg>
                    </div>
                    <p class="mb-4 text-[#333] text-lg sm:text-xl font-semibold leading-6 sm:leading-[26px]">
                        Generate recurring income
                    </p>
                    <p class="text-collo-heading leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. consectetur adipiscing elit. Suspendisse varius
                    </p>
                </div>
            </div>
        </section>
        <MainFooter />
    </div>
</template>

<style>
    .a{
        border-left: var(--sds-size-blur-100) solid var(--new-pri, );
    }
</style>