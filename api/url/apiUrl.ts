import { getToDate, getYdayDate } from '@/api/getDate';

const baseUrl = '넥슨 기본 api url';

// rank
export const dojangUrl = `무릉도장 url`; // 무릉도장
export const theseedUrl = `더시드 url`; // 더시드
export const achievementUrl = `업적 url`; // 업적

// user
export const ocidUrl = (name: string) => {
    // ocid (유저 고유 키 값)
    const url = `ocid url`;
    return url;
};
export const userUrl = (ocid: string) => {
    // 유저 정보 (레벨, 닉네임 등등)
    const url = `유저 url`;
    return url;
};
export const popularityUrl = (ocid: string) => {
    // 유저 인기도
    const url = `인기도 url`;
    return url;
};
export const overallUrl = (ocid: string, world?: string) => {
    // 유저 랭킹
    const url = `랭킹 url`;
    return url;
};
export const unionUrl = (ocid: string) => {
    // 유저 유니온 기본 정보
    const url = `유니온 정보 url`;
    return url;
};
export const statUrl = (ocid: string) => {
    // 유저 스탯 정보
    const url = `유저 스탯 url`;
    return url;
};
export const setUrl = (ocid: string) => {
    // 장착중인 세트 효과
    const url = `유저 세트 효과 url`;
    return url;
}
export const abilityUrl = (ocid: string) => {
    // 어빌리티 정보
    const url = `어빌리티 정보 url`;
    return url;
}

// notice
export const noticeUrl = `공지 url`; // 공지
export const updateUrl = `업데이트 url`; // 업데이트
