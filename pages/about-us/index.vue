<template>
    <div>
        <MainHeader />
        <section class="bg-white px-5 pb-16 sm:pb-24 text-center pt-[72px] sm:pt-[192px]">
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
                <p class="mb-4 sm:mb-5 text-[#101828] text-2xl sm:text-4xl font-semibold leading-[normal] sm:leading-[44px] tracking-[-0.48px] sm:tracking-[-0.72px]">
                    The values we live by
                </p>
                <p class="mb-12 sm:mb-[62px] text-[#667085] sm:text-xl leading-[24px] sm:leading-[30px] max-w-[768px] mx-auto">
                    We are building a community of people who want to grow their wealth and enjoy exclusive access to first-class saving and investment opportunities.
                </p>
            </div>
            <div class="max-w-[1076px] mx-auto flex flex-col sm:flex-row gap-5 sm:gap-7">
                <div class="p-5 rounded-xl border border-[#E2E8F0] bg-[rgba(255,241,235,0.50)]">
                    <div class="mb-5 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_12789_10552)">
                              <path d="M31.25 4.99977H25.5844C24.882 4.21341 24.0215 3.58424 23.0592 3.15346C22.0968 2.72268 21.0544 2.5 20 2.5C18.9456 2.5 17.9032 2.72268 16.9408 3.15346C15.9785 3.58424 15.118 4.21341 14.4156 4.99977H8.75C8.08696 4.99977 7.45107 5.26317 6.98223 5.73201C6.51339 6.20085 6.25 6.83673 6.25 7.49977V33.7498C6.25 34.4128 6.51339 35.0487 6.98223 35.5175C7.45107 35.9864 8.08696 36.2498 8.75 36.2498H31.25C31.913 36.2498 32.5489 35.9864 33.0178 35.5175C33.4866 35.0487 33.75 34.4128 33.75 33.7498V7.49977C33.75 6.83673 33.4866 6.20085 33.0178 5.73201C32.5489 5.26317 31.913 4.99977 31.25 4.99977ZM20 4.99977C21.3261 4.99977 22.5979 5.52656 23.5355 6.46424C24.4732 7.40192 25 8.67369 25 9.99977H15C15 8.67369 15.5268 7.40192 16.4645 6.46424C17.4021 5.52656 18.6739 4.99977 20 4.99977ZM25 24.9998H15C14.6685 24.9998 14.3505 24.8681 14.1161 24.6337C13.8817 24.3992 13.75 24.0813 13.75 23.7498C13.75 23.4183 13.8817 23.1003 14.1161 22.8659C14.3505 22.6315 14.6685 22.4998 15 22.4998H25C25.3315 22.4998 25.6495 22.6315 25.8839 22.8659C26.1183 23.1003 26.25 23.4183 26.25 23.7498C26.25 24.0813 26.1183 24.3992 25.8839 24.6337C25.6495 24.8681 25.3315 24.9998 25 24.9998ZM25 19.9998H15C14.6685 19.9998 14.3505 19.8681 14.1161 19.6337C13.8817 19.3992 13.75 19.0813 13.75 18.7498C13.75 18.4183 13.8817 18.1003 14.1161 17.8659C14.3505 17.6315 14.6685 17.4998 15 17.4998H25C25.3315 17.4998 25.6495 17.6315 25.8839 17.8659C26.1183 18.1003 26.25 18.4183 26.25 18.7498C26.25 19.0813 26.1183 19.3992 25.8839 19.6337C25.6495 19.8681 25.3315 19.9998 25 19.9998Z" fill="#FD9264"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_12789_10552">
                                <rect width="40" height="40" fill="white"/>
                              </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p class="mb-4 text-[#333] text-lg sm:text-xl font-semibold leading-6 sm:leading-[26px]">
                        Accountability
                    </p>
                    <p class="text-collo-heading leading-6">
                        We ensure to frequently send clear information to our clients, allowing them to track how their money is being managed.
                    </p>
                </div>
                <div class="p-5 rounded-xl border border-[#E2E8F0] bg-[rgba(238,251,238,0.60)]">
                    <div class="mb-5 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_12789_10546)">
                              <path d="M39.7341 16.8607L35.7466 8.8826C35.5997 8.58895 35.3964 8.32712 35.1483 8.11205C34.9002 7.89698 34.6121 7.73289 34.3006 7.62914C33.9891 7.5254 33.6602 7.48404 33.3327 7.50742C33.0052 7.5308 32.6855 7.61847 32.3919 7.76541L28.5059 9.7076L20.32 7.54197C20.11 7.48731 19.8894 7.48731 19.6794 7.54197L11.4934 9.7076L7.6075 7.76541C7.31388 7.61847 6.99418 7.5308 6.66668 7.50742C6.33917 7.48404 6.01027 7.5254 5.69875 7.62914C5.38723 7.73289 5.0992 7.89698 4.85111 8.11205C4.60301 8.32712 4.39971 8.58895 4.25281 8.8826L0.265312 16.8592C0.118369 17.1528 0.0307036 17.4725 0.00732308 17.8C-0.0160574 18.1275 0.0253048 18.4564 0.129048 18.7679C0.23279 19.0794 0.396882 19.3675 0.611951 19.6156C0.82702 19.8636 1.08885 20.0669 1.3825 20.2138L5.60125 22.3248L14.2716 28.517C14.3993 28.6079 14.5429 28.6741 14.695 28.7123L24.695 31.2123C24.9044 31.2648 25.1239 31.2622 25.332 31.2047C25.5401 31.1472 25.7298 31.0368 25.8825 30.8842L32.1325 24.6342L34.4887 22.2779L38.6169 20.2138C39.2095 19.9172 39.6601 19.3973 39.8696 18.7686C40.0791 18.1398 40.0303 17.4536 39.7341 16.8607ZM31.1575 22.0748L25.7809 17.7685C25.5401 17.5756 25.2364 17.4787 24.9283 17.4963C24.6202 17.5138 24.3295 17.6448 24.1122 17.8638C21.3294 20.667 18.2278 20.3123 16.2497 19.0623L23.0059 12.4998H27.9762L32.2278 21.0013L31.1575 22.0748ZM24.6153 28.6154L15.5341 26.3451L7.84656 20.8545L12.2216 12.1045L19.9997 10.0435L21.5309 10.4482L14.4997 17.2732L14.4872 17.2873C14.2225 17.552 14.0206 17.8727 13.8965 18.2258C13.7723 18.5789 13.729 18.9554 13.7698 19.3275C13.8106 19.6996 13.9345 20.0578 14.1322 20.3756C14.3299 20.6934 14.5965 20.9628 14.9122 21.1638C18.1247 23.2154 22.0012 22.8826 25.0544 20.3826L29.3747 23.8529L24.6153 28.6154ZM20.5966 34.0529C20.529 34.3231 20.3732 34.563 20.1538 34.7345C19.9345 34.906 19.6641 34.9994 19.3856 34.9998C19.2829 34.9996 19.1806 34.9871 19.0809 34.9623L12.5638 33.3326C12.4115 33.295 12.2677 33.2287 12.1403 33.1373L8.02312 30.1967C7.76997 29.9979 7.60324 29.7091 7.55766 29.3905C7.51208 29.0719 7.59116 28.748 7.77843 28.4862C7.96569 28.2244 8.24672 28.045 8.56299 27.9852C8.87925 27.9255 9.20638 27.99 9.47625 28.1654L13.3997 30.9685L19.6872 32.5373C20.0087 32.6177 20.2852 32.8226 20.4557 33.1068C20.6262 33.391 20.6769 33.7313 20.5966 34.0529Z" fill="#049F0A"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_12789_10546">
                                <rect width="40" height="40" fill="white"/>
                              </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p class="mb-4 text-[#333] text-lg sm:text-xl font-semibold leading-6 sm:leading-[26px]">
                        Integrity
                    </p>
                    <p class="text-collo-heading leading-6">
                        We live by trust and remind ourselves every day that it is a value we have to continue to earn from our users.
                    </p>
                </div>
                <div class="p-5 rounded-xl border border-[#E2E8F0] bg-[rgba(225,230,255,0.50)]">
                    <div class="mb-5 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_12789_10537)">
                              <path d="M36 34.2485C36.1397 34.4342 36.2249 34.6552 36.246 34.8866C36.2671 35.1181 36.2233 35.3508 36.1194 35.5587C36.0155 35.7666 35.8557 35.9415 35.658 36.0636C35.4603 36.1857 35.2324 36.2503 35 36.2501H5C4.76786 36.2501 4.54031 36.1854 4.34284 36.0634C4.14537 35.9413 3.98578 35.7667 3.88197 35.5591C3.77815 35.3514 3.7342 35.119 3.75505 34.8878C3.7759 34.6566 3.86072 34.4358 4 34.2501C5.10685 32.7661 6.58285 31.5977 8.28125 30.861C7.35028 30.0113 6.69796 28.9 6.40992 27.6729C6.12188 26.4458 6.21158 25.1604 6.66724 23.9852C7.1229 22.81 7.92323 21.8 8.96318 21.0879C10.0031 20.3757 11.2341 19.9946 12.4945 19.9946C13.755 19.9946 14.9859 20.3757 16.0259 21.0879C17.0658 21.8 17.8662 22.81 18.3218 23.9852C18.7775 25.1604 18.8672 26.4458 18.5791 27.6729C18.2911 28.9 17.6388 30.0113 16.7078 30.861C17.9332 31.3906 19.0467 32.1484 19.9891 33.0938C20.9315 32.1484 22.045 31.3906 23.2703 30.861C22.3393 30.0113 21.687 28.9 21.399 27.6729C21.1109 26.4458 21.2006 25.1604 21.6563 23.9852C22.112 22.81 22.9123 21.8 23.9522 21.0879C24.9922 20.3757 26.2232 19.9946 27.4836 19.9946C28.744 19.9946 29.975 20.3757 31.0149 21.0879C32.0549 21.8 32.8552 22.81 33.3109 23.9852C33.7665 25.1604 33.8562 26.4458 33.5682 27.6729C33.2802 28.9 32.6278 30.0113 31.6969 30.861C33.4032 31.5938 34.8871 32.7619 36 34.2485ZM4.25 19.7501C4.38132 19.8485 4.53076 19.9202 4.68977 19.9609C4.84879 20.0017 5.01427 20.0107 5.17678 19.9875C5.33928 19.9643 5.49562 19.9093 5.63687 19.8256C5.77812 19.742 5.90151 19.6314 6 19.5001C6.75682 18.491 7.73819 17.6719 8.86639 17.1078C9.99459 16.5437 11.2386 16.2501 12.5 16.2501C13.7614 16.2501 15.0054 16.5437 16.1336 17.1078C17.2618 17.6719 18.2432 18.491 19 19.5001C19.1164 19.6553 19.2674 19.7813 19.441 19.8681C19.6146 19.9549 19.8059 20.0001 20 20.0001C20.1941 20.0001 20.3854 19.9549 20.559 19.8681C20.7326 19.7813 20.8836 19.6553 21 19.5001C21.7568 18.491 22.7382 17.6719 23.8664 17.1078C24.9946 16.5437 26.2386 16.2501 27.5 16.2501C28.7614 16.2501 30.0054 16.5437 31.1336 17.1078C32.2618 17.6719 33.2432 18.491 34 19.5001C34.0986 19.6314 34.2221 19.742 34.3634 19.8256C34.5048 19.9092 34.6612 19.9641 34.8238 19.9873C34.9864 20.0104 35.1519 20.0013 35.3109 19.9605C35.47 19.9196 35.6195 19.8479 35.7508 19.7493C35.8821 19.6507 35.9927 19.5272 36.0763 19.3858C36.1599 19.2445 36.2148 19.0881 36.238 18.9255C36.2611 18.7629 36.252 18.5974 36.2112 18.4383C36.1704 18.2793 36.0986 18.1298 36 17.9985C34.8931 16.5149 33.4171 15.3471 31.7188 14.611C32.6497 13.7613 33.302 12.65 33.5901 11.4229C33.8781 10.1958 33.7884 8.91036 33.3328 7.73518C32.8771 6.56 32.0768 5.55004 31.0368 4.83788C29.9969 4.12572 28.7659 3.74463 27.5055 3.74463C26.245 3.74463 25.0141 4.12572 23.9741 4.83788C22.9342 5.55004 22.1338 6.56 21.6782 7.73518C21.2225 8.91036 21.1328 10.1958 21.4209 11.4229C21.7089 12.65 22.3612 13.7613 23.2922 14.611C22.0668 15.1406 20.9533 15.8984 20.0109 16.8438C19.0685 15.8984 17.955 15.1406 16.7297 14.611C17.6607 13.7613 18.313 12.65 18.601 11.4229C18.8891 10.1958 18.7994 8.91036 18.3437 7.73518C17.888 6.56 17.0877 5.55004 16.0478 4.83788C15.0078 4.12572 13.7768 3.74463 12.5164 3.74463C11.256 3.74463 10.025 4.12572 8.98505 4.83788C7.9451 5.55004 7.14477 6.56 6.68911 7.73518C6.23345 8.91036 6.14376 10.1958 6.4318 11.4229C6.71984 12.65 7.37215 13.7613 8.30313 14.611C6.59675 15.3444 5.1129 16.5131 4 18.0001C3.90151 18.1314 3.82985 18.2808 3.78911 18.4398C3.74837 18.5988 3.73935 18.7643 3.76256 18.9268C3.78578 19.0893 3.84077 19.2457 3.92441 19.3869C4.00804 19.5282 4.11868 19.6516 4.25 19.7501Z" fill="#8095FF"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_12789_10537">
                                <rect width="40" height="40" fill="white"/>
                              </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p class="mb-4 text-[#333] text-lg sm:text-xl font-semibold leading-6 sm:leading-[26px]">
                        Impact
                    </p>
                    <p class="text-collo-heading leading-6">
                        We are committed to creating lasting impact and seeking new ways to drive the best outcomes for our clients.
                    </p>
                </div>
            </div>
        </section>
        <section class="bg-white pb-[16.7px] sm:py-24 px-5 sm:px-[120px]">
            <div class="mb-7 sm:mb-16 text-center max-w-[768px] mx-auto">
                <p class="mb-5 text-[#333] text-2xl sm:text-[40px] font-semibold leading-[normal]">
                    Our Board of Directors
                </p>
                <p class="text-collo-text sm:text-xl leading-6 sm:leading-[30px]">
                    Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim di
                </p>
            </div>
            <div class="max-w-[1200px] mx-auto">
                <div class="flex flex-col sm:flex-row gap-6 sm:gap-[76px] items-center">
                    <div class="sm:order-2">
                        <img src="/assets/img/board/olayinka.png" alt="">
                    </div>
                    <div class="max-w-[612px]">
                        <p class="mb-2 text-[#333] text-lg sm:text-2xl font-semibold leading-[normal]">
                            Olayinka Odunbaku
                        </p>
                        <p class="mb-4 sm:mb-[50px] text-[#631CBF] font-semibold leading-6">Founder/ CEO</p>
                        <div class="text-[#333] sm:text-lg leading-6">
                            <p class="mb-[30px]">
                                Olayinka Odunbaku is the Founder and CEO of The Hedge and Alpha Company Limited, a technology-driven
                                financial service firm. With a strong background in finance, investment, and business development,
                                Olayinka is responsible for setting the strategic direction of the company and making important corporate
                                decisions. He has over 18 years of experience in both the private and public sectors, including roles in
                                e-commerce, public finance, consulting, and banking.
                            </p>
                            <p>
                                Olayinka holds professional certifications as a CFA institute member, a Chartered Accountant (ACCA), and a
                                Chartered Tax Practitioner with CITN. He has obtained bachelor's and master's degrees in Applied Accounting
                                and Banking and Finance from Oxford Brookes University in the UK and the University of Lagos in Nigeria,
                                respectively.
                            </p>
                        </div>
                    </div>
                </div>
                <SlideNav class="mt-8 sm:mt-12" />
            </div>
        </section>
        <section class="bg-white pt-[42px] sm:pt-0 pb-12 sm:pb-24 px-5">
            <div class="pt-8 pb-[35.92px] sm:py-[68px] px-4 sm:px-[52px] rounded-[10px] bg-[#F9FAFB] flex flex-col sm:flex-row justify-between max-w-[1160px] mx-auto gap-4">
                <div>
                    <p class="mb-4 text-[#333] text-xl sm:text-[30px] font-semibold leading-[normal]">
                        Your Personal Assistant in Wealth Creation
                    </p>
                    <p class="text-collo-text sm:text-lg leading-6">
                        Join and start building a better financial future.
                    </p>
                </div>
                <div>
                    <NuxtLink to="https://app.colloafrica.com/auth/sign-up" class="btn btn-primary w-fit">Get started</NuxtLink>
                </div>
            </div>
        </section>
        <MainFooter />
    </div>
</template>
