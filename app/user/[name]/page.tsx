import { ocidUrl, setUrl, userUrl } from "@/api/url/apiUrl";
import { userDataProps, userNameProps, userSetProps } from "../userProps/props";
import ssrFetcher from "@/api/ssrFetcher";
import UserHeader from "./components/UserHeader";
import UserStat from "./components/UserSet";

export default async function SearchPage({ params }: userNameProps) {
    const { name } = await params;
    const userName = decodeURIComponent(name);

    const userOcidUrl = ocidUrl(userName);
    const userOcid = await ssrFetcher(userOcidUrl);
    const userInfoUrl = userUrl(userOcid[0]['ocid']);
    const userInfoDataInfo = await ssrFetcher(userInfoUrl);
    const userData: userDataProps = {
		date: userInfoDataInfo[0].date,
		characterName: userInfoDataInfo[0].character_name,
		worldName: userInfoDataInfo[0].world_name,
		characterGender: userInfoDataInfo[0].character_gender,
		characterClass: userInfoDataInfo[0].character_class,
		characterClassLevel: userInfoDataInfo[0].character_class_level,
		characterLevel: userInfoDataInfo[0].character_level,
		characterExp: userInfoDataInfo[0].character_exp,
		characterExpRate: userInfoDataInfo[0].character_exp_rate,
		characterGuildName: userInfoDataInfo[0].character_guild_name,
		characterImage: userInfoDataInfo[0].character_image,
		characterDateCreate: userInfoDataInfo[0].character_date_create,
		accessFlag: userInfoDataInfo[0].access_flag,
		liberationQuestClearFlag: userInfoDataInfo[0].liberation_quest_clear_flag
    }

	// 세트효과
	const userSetUrl = setUrl(userOcid[0]['ocid']);
	const userSetData = await ssrFetcher(userSetUrl);
	const userSetEffect: userSetProps[] = userSetData[0].set_effect;

    return (
        <div className="w-full h-auto">
			<div className="w-full px-[20px] py-[32px]">
				<UserHeader data={userData} ocid={userOcid[0]['ocid']} />
			</div>
			<div className="w-full py-[16px] px-[48px] bg-gray-200 rounded-[8px] flex justify-center dark:bg-neutral-800 m-auto pc:m-0 pc:w-max">
				<UserStat data={userSetEffect} />
			</div>
        </div>
    );
}
