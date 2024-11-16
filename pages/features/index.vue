<template>
    <div>
        <MainHeader />
        <section class="bg-white py-8 px-5 sm:pt-[72px] sm:pr-14 sm:pb-24 sm:pl-[120px] flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-[78px]">
            <div>
                <h1 class="mb-4 sm:mb-6 text-collo-heading text-[32px] sm:text-6xl font-semibold leading-10 sm:leading-[72px] max-w-[626px]">
                    Save without thinking about it.
                </h1>
                <p class="max-w-[520px] mb-7 sm:mb-12 text-collo-text sm:text-xl leading-6 sm:leading-[30px]">
                    Create wealth and shared prosperity with Collo Africa's tech-driven solution for managing traditional Ajo, Esusu, Adashe, and ROSCA saving groups.
                </p>
                <div>
                    <NuxtLink to="https://app.colloafrica.com/auth/sign-up" class="btn btn-primary w-fit">Get Started Now</NuxtLink>
                </div>
            </div>
            <div class="w-full sm:w-[560px] h-[382.857px] sm:h-[640px] rounded-t-[215.357px] sm:rounded-t-[360px] bg-[#F2F4F7] relative flex items-end justify-center">
                <img src="/assets/img/save.png" alt="" class="w-[222.536px] sm:w-[372px]">
                <div class="absolute bottom-[58.12px] sm:bottom-[77px] left-[11.21px] sm:left-[-52px] bg-white rounded-[5.221px] sm:rounded-xl px-[11.96px] sm:px-5 mgr-flag flex items-center gap-[23.93px] sm:gap-10">
                    <div class="text-collo-heading py-[7.18px] sm:py-3 leading-[normal]">
                        <p class="mb-[3.48px] sm:mb-2 text-[6.962px] sm:text-base">Total Savings</p>
                        <p class="text-[11.313px] sm:text-[26px] font-semibold">₦100,000</p>
                    </div>
                    <div class="w-[23.929px] sm:w-10 h-[23.929px] sm:h-10 py-[5.08px] px-[5.38px] sm:p-[9px] rounded-[5.982px] sm:rounded-[10px] border-[0.299px] sm:border-[0.5px] border-[#DDEBF7] bg-[#DEE8F0]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 22 22" fill="none">
                            <path d="M17.1875 10.3125C17.1875 10.5844 17.1069 10.8503 16.9558 11.0764C16.8047 11.3025 16.5899 11.4788 16.3387 11.5828C16.0874 11.6869 15.811 11.7141 15.5443 11.6611C15.2775 11.608 15.0325 11.4771 14.8402 11.2848C14.6479 11.0925 14.517 10.8475 14.4639 10.5807C14.4109 10.314 14.4381 10.0376 14.5422 9.78631C14.6462 9.53506 14.8225 9.32032 15.0486 9.16923C15.2747 9.01814 15.5406 8.9375 15.8125 8.9375C16.1772 8.9375 16.5269 9.08237 16.7848 9.34023C17.0426 9.59809 17.1875 9.94783 17.1875 10.3125ZM13.4062 5.5H9.96875C9.69525 5.5 9.43294 5.60865 9.23955 5.80205C9.04615 5.99544 8.9375 6.25775 8.9375 6.53125C8.9375 6.80475 9.04615 7.06706 9.23955 7.26045C9.43294 7.45385 9.69525 7.5625 9.96875 7.5625H13.4062C13.6798 7.5625 13.9421 7.45385 14.1355 7.26045C14.3288 7.06706 14.4375 6.80475 14.4375 6.53125C14.4375 6.25775 14.3288 5.99544 14.1355 5.80205C13.9421 5.60865 13.6798 5.5 13.4062 5.5ZM22 9.625V12.375C22.0001 13.0064 21.752 13.6125 21.3093 14.0626C20.8665 14.5128 20.2646 14.7709 19.6333 14.7812L18.3219 18.4534C18.2026 18.7872 17.9829 19.076 17.6931 19.2802C17.4032 19.4843 17.0573 19.5939 16.7028 19.5938H15.6097C15.2552 19.5939 14.9093 19.4843 14.6194 19.2802C14.3296 19.076 14.1099 18.7872 13.9906 18.4534L13.9047 18.2188H9.46773L9.3818 18.4534C9.26264 18.7868 9.04341 19.0753 8.75407 19.2794C8.46473 19.4836 8.11941 19.5933 7.76531 19.5938H6.67219C6.31765 19.5939 5.97176 19.4843 5.6819 19.2802C5.39205 19.076 5.17243 18.7872 5.05312 18.4534L3.99609 15.4928C3.09259 14.4529 2.47773 13.1941 2.21289 11.8422C2.11477 12.0026 2.06273 12.187 2.0625 12.375C2.0625 12.6485 1.95385 12.9108 1.76045 13.1042C1.56706 13.2976 1.30475 13.4062 1.03125 13.4062C0.757746 13.4062 0.495443 13.2976 0.302046 13.1042C0.108649 12.9108 0 12.6485 0 12.375C0.000975618 11.7268 0.205121 11.0952 0.583721 10.5691C0.962321 10.043 1.49633 9.64879 2.11063 9.44195C2.32728 7.50863 3.24814 5.72274 4.69752 4.42505C6.1469 3.12736 8.02332 2.40872 9.96875 2.40625H18.9062C19.1798 2.40625 19.4421 2.5149 19.6355 2.7083C19.8289 2.90169 19.9375 3.164 19.9375 3.4375C19.9375 3.711 19.8289 3.97331 19.6355 4.1667C19.4421 4.3601 19.1798 4.46875 18.9062 4.46875H18.0469C18.875 5.22267 19.5335 6.14392 19.9788 7.17148L20.0148 7.25742C20.5706 7.35707 21.0738 7.64866 21.4366 8.08135C21.7994 8.51403 21.9988 9.06034 22 9.625ZM19.9375 9.625C19.9375 9.53383 19.9013 9.4464 19.8368 9.38193C19.7724 9.31747 19.6849 9.28125 19.5938 9.28125H19.2792C19.0596 9.28124 18.8458 9.21114 18.6688 9.08114C18.4918 8.95115 18.3609 8.76805 18.2952 8.55852C17.9219 7.37211 17.1798 6.33576 16.1769 5.60021C15.174 4.86466 13.9625 4.46829 12.7188 4.46875H9.96875C8.83464 4.46867 7.72501 4.79859 6.77517 5.4183C5.82534 6.038 5.07636 6.9207 4.61956 7.95874C4.16276 8.99679 4.01788 10.1453 4.2026 11.2643C4.38732 12.3833 4.89365 13.4243 5.65984 14.2605C5.75282 14.3614 5.82443 14.4801 5.87039 14.6094L6.91453 17.5312H7.52297L7.76961 16.8438C7.84063 16.6429 7.97212 16.4689 8.14601 16.3458C8.3199 16.2227 8.52765 16.1565 8.7407 16.1562H14.6343C14.8474 16.1565 15.0551 16.2227 15.229 16.3458C15.4029 16.4689 15.5344 16.6429 15.6054 16.8438L15.852 17.5312H16.4605L17.9352 13.4062C18.0062 13.2054 18.1377 13.0314 18.3116 12.9083C18.4854 12.7852 18.6932 12.719 18.9062 12.7188H19.5938C19.6849 12.7188 19.7724 12.6825 19.8368 12.6181C19.9013 12.5536 19.9375 12.4662 19.9375 12.375V9.625Z" fill="#1E96FC"/>
                        </svg>
                    </div>
                </div>
                <div class="absolute top-[141.18px] sm:top-[236px] right-[13.01px] sm:right-[22px] bg-white rounded-[5.221px] sm:rounded-xl px-[11.96px] sm:px-5 mgr-flag flex items-center gap-[23.93px] sm:gap-10">
                    <div class="text-collo-heading py-[7.18px] sm:py-3 leading-[normal]">
                        <p class="mb-[3.48px] sm:mb-2 text-[6.962px] sm:text-base">Total Savings</p>
                        <p class="text-[11.313px] sm:text-[26px] font-semibold">₦100,000</p>
                    </div>
                    <div class="w-[23.929px] sm:w-10 h-[23.929px] sm:h-10 py-[5.08px] px-[5.38px] sm:p-[9px] rounded-[5.982px] sm:rounded-[10px] border-[0.299px] sm:border-[0.5px] border-[#DDEBF7] bg-[#DEE8F0]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 22 22" fill="none">
                            <path d="M17.1875 10.3125C17.1875 10.5844 17.1069 10.8503 16.9558 11.0764C16.8047 11.3025 16.5899 11.4788 16.3387 11.5828C16.0874 11.6869 15.811 11.7141 15.5443 11.6611C15.2775 11.608 15.0325 11.4771 14.8402 11.2848C14.6479 11.0925 14.517 10.8475 14.4639 10.5807C14.4109 10.314 14.4381 10.0376 14.5422 9.78631C14.6462 9.53506 14.8225 9.32032 15.0486 9.16923C15.2747 9.01814 15.5406 8.9375 15.8125 8.9375C16.1772 8.9375 16.5269 9.08237 16.7848 9.34023C17.0426 9.59809 17.1875 9.94783 17.1875 10.3125ZM13.4062 5.5H9.96875C9.69525 5.5 9.43294 5.60865 9.23955 5.80205C9.04615 5.99544 8.9375 6.25775 8.9375 6.53125C8.9375 6.80475 9.04615 7.06706 9.23955 7.26045C9.43294 7.45385 9.69525 7.5625 9.96875 7.5625H13.4062C13.6798 7.5625 13.9421 7.45385 14.1355 7.26045C14.3288 7.06706 14.4375 6.80475 14.4375 6.53125C14.4375 6.25775 14.3288 5.99544 14.1355 5.80205C13.9421 5.60865 13.6798 5.5 13.4062 5.5ZM22 9.625V12.375C22.0001 13.0064 21.752 13.6125 21.3093 14.0626C20.8665 14.5128 20.2646 14.7709 19.6333 14.7812L18.3219 18.4534C18.2026 18.7872 17.9829 19.076 17.6931 19.2802C17.4032 19.4843 17.0573 19.5939 16.7028 19.5938H15.6097C15.2552 19.5939 14.9093 19.4843 14.6194 19.2802C14.3296 19.076 14.1099 18.7872 13.9906 18.4534L13.9047 18.2188H9.46773L9.3818 18.4534C9.26264 18.7868 9.04341 19.0753 8.75407 19.2794C8.46473 19.4836 8.11941 19.5933 7.76531 19.5938H6.67219C6.31765 19.5939 5.97176 19.4843 5.6819 19.2802C5.39205 19.076 5.17243 18.7872 5.05312 18.4534L3.99609 15.4928C3.09259 14.4529 2.47773 13.1941 2.21289 11.8422C2.11477 12.0026 2.06273 12.187 2.0625 12.375C2.0625 12.6485 1.95385 12.9108 1.76045 13.1042C1.56706 13.2976 1.30475 13.4062 1.03125 13.4062C0.757746 13.4062 0.495443 13.2976 0.302046 13.1042C0.108649 12.9108 0 12.6485 0 12.375C0.000975618 11.7268 0.205121 11.0952 0.583721 10.5691C0.962321 10.043 1.49633 9.64879 2.11063 9.44195C2.32728 7.50863 3.24814 5.72274 4.69752 4.42505C6.1469 3.12736 8.02332 2.40872 9.96875 2.40625H18.9062C19.1798 2.40625 19.4421 2.5149 19.6355 2.7083C19.8289 2.90169 19.9375 3.164 19.9375 3.4375C19.9375 3.711 19.8289 3.97331 19.6355 4.1667C19.4421 4.3601 19.1798 4.46875 18.9062 4.46875H18.0469C18.875 5.22267 19.5335 6.14392 19.9788 7.17148L20.0148 7.25742C20.5706 7.35707 21.0738 7.64866 21.4366 8.08135C21.7994 8.51403 21.9988 9.06034 22 9.625ZM19.9375 9.625C19.9375 9.53383 19.9013 9.4464 19.8368 9.38193C19.7724 9.31747 19.6849 9.28125 19.5938 9.28125H19.2792C19.0596 9.28124 18.8458 9.21114 18.6688 9.08114C18.4918 8.95115 18.3609 8.76805 18.2952 8.55852C17.9219 7.37211 17.1798 6.33576 16.1769 5.60021C15.174 4.86466 13.9625 4.46829 12.7188 4.46875H9.96875C8.83464 4.46867 7.72501 4.79859 6.77517 5.4183C5.82534 6.038 5.07636 6.9207 4.61956 7.95874C4.16276 8.99679 4.01788 10.1453 4.2026 11.2643C4.38732 12.3833 4.89365 13.4243 5.65984 14.2605C5.75282 14.3614 5.82443 14.4801 5.87039 14.6094L6.91453 17.5312H7.52297L7.76961 16.8438C7.84063 16.6429 7.97212 16.4689 8.14601 16.3458C8.3199 16.2227 8.52765 16.1565 8.7407 16.1562H14.6343C14.8474 16.1565 15.0551 16.2227 15.229 16.3458C15.4029 16.4689 15.5344 16.6429 15.6054 16.8438L15.852 17.5312H16.4605L17.9352 13.4062C18.0062 13.2054 18.1377 13.0314 18.3116 12.9083C18.4854 12.7852 18.6932 12.719 18.9062 12.7188H19.5938C19.6849 12.7188 19.7724 12.6825 19.8368 12.6181C19.9013 12.5536 19.9375 12.4662 19.9375 12.375V9.625Z" fill="#1E96FC"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <AsFeaturedIn class="mb-[60px] sm:mb-0" />
        <section class="px-5 pb-[75.71px] sm:pl-[120px] sm:pt-24 bg-white">
            <div>
                <p class="mb-5 text-[#0A0511] text-2xl sm:text-4xl font-semibold leading-[31px] sm:leading-[normal]">
                    Achieve goals, with growth savings.
                </p>
                <p class="mb-7 sm:mb-14 text-collo-text sm:text-xl leading-6 sm:leading-[30px] max-w-[768px]">
                    We are building a community of people who want to grow their wealth and enjoy exclusive access to first-class saving and investment opportunities.
                </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-11 sm:gap-[55.87px] sm:justify-between">
                <ul class="mt-6 max-w-[544px]">
                    <li class="py-4 pl-3 border-l border-[#F2F4F7]">
                        <p class="mb-2 text-[#333] text-lg sm:text-[22px] font-semibold leading-[normal]">
                            Share team inboxes
                        </p>
                        <p class="text-[#667085] sm:text-lg leading-6 sm:leading-[30px]">
                            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                        </p>
                    </li>
                    <li class="py-4 pl-3 border-l border-[#F2F4F7]">
                        <p class="mb-2 text-[#333] text-lg sm:text-[22px] font-semibold leading-[normal]">
                            Deliver instant answers
                        </p>
                        <p class="text-[#667085] sm:text-lg leading-6 sm:leading-[30px]">
                            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                        </p>
                    </li>
                    <li class="py-4 pl-3 border-l border-[#F2F4F7]">
                        <p class="mb-2 text-[#333] text-lg sm:text-[22px] font-semibold leading-[normal]">
                            Manage your team with reports
                        </p>
                        <p class="text-[#667085] sm:text-lg leading-6 sm:leading-[30px]">
                            Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                        </p>
                    </li>
                </ul>
                <div>
                    <img src="/assets/img/content.png" alt="">
                </div>
            </div>
        </section>
        <AppStoreCTASection />
        <section class="py-[42px] sm:py-24 px-5 sm:px-[120px] bg-collo-grey-50 flex flex-col sm:flex-row items-center justify-center gap-[30px] sm:gap-[92px]">
            <div class="max-w-[539px] sm:order-2">
                <p class="mb-4 sm:mb-5 text-[#333] text-2xl sm:text-5xl font-semibold leading-[31px] sm:leading-[60.48px]">
                    Save for Generations
                </p>
                <p class="mb-2 sm:mb-3 text-collo-text text-xl leading-6">
                    MGR helps achieve today's needs and tomorrow's dreams. Whether it's emergencies, business ventures, bills,
                    or long-term wealth, our platform makes your financial goals easily attainable.
                </p>
                <p class="mb-7 sm:mb-10 text-collo-text text-xl leading-6">
                    Additionally, you can put your savings towards creating generational wealth with Collo Africa's investment services.
                </p>
                <NuxtLink to="https://app.colloafrica.com/auth/sign-up" class="btn btn-primary w-fit">Become a member</NuxtLink>
            </div>
            <div>
                <img src="/assets/img/generations.png" alt="">
            </div>
        </section>
        <MainFooter />
    </div>
</template>

<style>
    .mgr-flag{
        box-shadow: 121px 84px 41px 0px rgba(196, 196, 196, 0.00), 78px 54px 38px 0px rgba(196, 196, 196, 0.01), 44px 30px 32px 0px rgba(196, 196, 196, 0.05), 19px 13px 24px 0px rgba(196, 196, 196, 0.09), 5px 3px 13px 0px rgba(196, 196, 196, 0.10);
    }
</style>
