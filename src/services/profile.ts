import profileData from '../data/profileData.json'

export const getProfileData = () => {
  try {
    const response = profileData;
    return response;
  } catch (error: any) {
    throw Error(error.message)
  }
}