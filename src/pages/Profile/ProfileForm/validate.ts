import { UpdateProfileFormDataType } from 'API/api'

export const validate = (values: UpdateProfileFormDataType) => {
  const errors: UpdateProfileFormDataType = {} as UpdateProfileFormDataType
  const regExp =
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/

  if (values.facebook && !regExp.test(values.facebook)) {
    errors.facebook = 'Invalid URL'
  }

  if (values.github && !regExp.test(values.github)) {
    errors.github = 'Invalid URL'
  }

  if (values.instagram && !regExp.test(values.instagram)) {
    errors.instagram = 'Invalid URL'
  }

  if (values.mainLink && !regExp.test(values.mainLink)) {
    errors.mainLink = 'Invalid URL'
  }

  if (values.twitter && !regExp.test(values.twitter)) {
    errors.twitter = 'Invalid URL'
  }

  if (values.website && !regExp.test(values.website)) {
    errors.website = 'Invalid URL'
  }

  if (values.vk && regExp.test(values.vk)) {
    errors.vk = 'Invalid URL'
  }

  // if (values.youtube && !regExp.test(values.youtube)) {
  //   errors.youtube = 'Invalid URL'
  // }
  return errors
}
