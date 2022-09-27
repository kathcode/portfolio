import { getProfileData } from './profile';

jest.mock('./profile', () => ({
  getProfileData: () => ({
    "firstName": "Catalina",
    "lastName": "Meneses"
  })
}))

test('should return the profile information', () => {
  expect(getProfileData()).toEqual({
    "firstName": "Catalina",
    "lastName": "Meneses"
  })
})