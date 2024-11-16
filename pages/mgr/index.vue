<template>
    <div>
        <MainHeader />
        <section class="bg-white pt-8 sm:pt-[108px] pb-[67.63px] sm:pb-[116.23px] px-5 sm:px-[121px] flex flex-col sm:flex-row justify-center gap-10 sm:gap-[65px] mgr-hero">
            <div class="max-w-[520px]">
                <p class="mb-4 sm:mb-6 text-collo-heading text-[32px] sm:text-[64px] font-semibold leading-10 sm:leading-[normal]">
                    Merry-Go-Round
                </p>
                <p class="mb-7 sm:mb-12 text-collo-text sm:text-2xl leading-6 sm:leading-[31px]">
                    Create wealth and shared prosperity with Collo Africa's tech-driven solution for managing traditional Ajo, Esusu, Adashe, and ROSCA saving groups.
                </p>
                <NuxtLink to="https://app.colloafrica.com/auth/sign-up" class="btn btn-primary w-fit">
                    Become a member
                </NuxtLink>
            </div>
            <div>
                <img src="/assets/img/mgr-hero.png" alt="">
            </div>
        </section>
        <MainFooter />
    </div>
</template>

<style>
    .mgr-flag{
        color: var(--body-text-2, #5C5C5C);
font-family: "Albert Sans";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 31px; /* 129.167% */
    }
    @media (min-width: 640px) {
        .mgr-hero {
            background-image: url('/assets/img/mgr-hero-bg.png');
            background-repeat: no-repeat;
            background-position: bottom right;
        }
    }
</style>
