import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({
  key: 'user',
  storage: localStorage,
});

export const userState = atom({
  key: 'users/userState',
  default: {
    id: '',
    name: '',
    email: '',
    cellphone: '',
    zip: '',
    address: '',
    addressDetail: '',
    createdAt: '',
    updatedAt: '',
  },
  effects: [persistAtom],
});
