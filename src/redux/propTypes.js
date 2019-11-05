import PropTypes from 'prop-types';

export default {
  locale: PropTypes.shape({
    current: PropTypes.string,
    locales: PropTypes.array,
  }),
  currency: PropTypes.shape({
    current: PropTypes.string,
    currencies: PropTypes.array,
  }),
  authentication: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    isRequested: PropTypes.bool,
    isResending: PropTypes.bool,
    isRecoveryPassword: PropTypes.bool,
    isRegistrationSuccess: PropTypes.bool,
    error: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.stripg,
      }),
      description: PropTypes.stripg,
      email: PropTypes.stripg,
    }),
  }),
  captain:PropTypes.shape({
    element: PropTypes.arrayOf.isRequired,
    nonFount: PropTypes.string,
    endPoint: PropTypes.string,
    captain: PropTypes.bool,
  }),
  listBox:PropTypes.shape({
    el: PropTypes.shape({
      slug: PropTypes.stripg,
    }),
  }),
  modals: PropTypes.shape({
    isLoginShow: PropTypes.bool,
    isLoginTransition: PropTypes.bool,
    isEventTransition: PropTypes.bool,
    isEventShow: PropTypes.bool,
    isRegistrationShow: PropTypes.bool,
    isRegistrationTransition: PropTypes.bool,
    isRecoveryShow: PropTypes.bool,
    isRecoveryTransition: PropTypes.bool,
    isVideoTransition: PropTypes.bool,
    isVideoShow: PropTypes.bool,
    isMediaTransition: PropTypes.bool,
    isMediaShow: PropTypes.bool,
    isCheckModelTransition: PropTypes.bool,
    isCheckModelShow: PropTypes.bool,
    isYachtTransition: PropTypes.bool,
    isYachtShow: PropTypes.bool,
    isDeleteAvatarTransition: PropTypes.bool,
    isDeleteAvatarShow: PropTypes.bool,
  }),
  events: PropTypes.shape({
    events: PropTypes.arrayOf.isRequired,
    search: PropTypes.bool.isRequired,
    isRequested: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  }),
  event: PropTypes.shape({
    seo: PropTypes.shape({
      title: PropTypes.stripg,
      description: PropTypes.stripg,
      image: PropTypes.stripg,
    }),
  }),
};
