'use client';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/store/login';
import { useAppDispatch } from '@/store/store';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일은 필수 입력 사항입니다.')
    .email('이메일 형식이 올바르지 않습니다.')
    .min(6, '이메일은 최소 6자 이상이어야 합니다.'),
  password: yup.string().required('패스워드는 필수 입력 사항입니다.').min(6, '패스워드는 최소 6자 이상이어야 합니다.'),
});

const LoginComponent = () => {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    const loginData = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const loginResponse = await loginData.json();
    if (loginResponse.error) {
      console.error(loginResponse.error);
      return;
    }
    dispatch(
      login({
        accessToken: loginResponse.accessToken,
        refreshToken: loginResponse.refreshToken,
        user: {
          id: loginResponse.id,
          uuid: loginResponse.userUUID,
          email: loginResponse.email,
          nickname: loginResponse.nickname,
          profileImage: loginResponse.profileImage,
          role: loginResponse.role,
        },
      }),
    );
    route.push('/');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col h-full justify-center items-center shadow-lg w-full rounded-xl my-4 p-4">
        <div className="flex flex-col justify-start items-center min-h-16">
          <div className="flex justify-between">
            <label htmlFor="email" className="text-center text-sm font-semibold text-nowrap min-w-16 mr-3">
              이메일
            </label>
            <input
              id="email"
              {...register('email')}
              type="email"
              aria-invalid={isSubmitted ? (errors.email ? 'true' : 'false') : undefined}
              className="text-xs w-36 p-1 rounded-md bg-slate-300 text-center self-start"
            />
          </div>
          <div>{errors.email && <small className="text-xs text-red-600">{errors.email?.message}</small>}</div>
        </div>

        <div className="flex flex-col justify-start items-center min-h-16">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-center text-sm text-nowrap font-semibold min-w-16 mr-3">
              패스워드
            </label>
            <input
              id="password"
              {...register('password')}
              type="password"
              aria-invalid={isSubmitted ? (errors.password ? true : false) : undefined}
              className="text-xs w-36 p-1 rounded-md bg-slate-300 text-center self-start"
            />
          </div>
          <div>
            {errors.password && <small className="text-xs self-start text-red-600">{errors.password?.message}</small>}
          </div>
        </div>

        <div className="flex flex-col space-y-3 w-full">
          <button type="submit" disabled={isSubmitting} className="w-full py-1 rounded-lg bg-zinc-400 text-2xl">
            로그인
          </button>
          <button type="button" onClick={() => route.push('/')} className="w-full py-1 rounded-lg bg-zinc-400 text-2xl">
            회원가입
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
