/* Generated by restful-react */

import React from 'react';
import { Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type OtpSendType = number;

export type SendPinInput = {
  sendTo?: string | null;
  sendType: OtpSendType;
  recipientType?: string | null;
  recipientId?: string | null;
  lifetime?: number | null;
} | null;

export type SendPinDto = {
  operationId?: string;
  sentTo?: string | null;
} | null;

export type ValidationErrorInfo = {
  message?: string | null;
  members?: string | null[] | null;
} | null;

export type ErrorInfo = {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
} | null;

export type SendPinDtoAjaxResponse = {
  result?: SendPinDto;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type AjaxResponseBase = {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type VerifyPinInput = {
  operationId?: string;
  pin?: string | null;
} | null;

export type VerifyPinResponse = {
  isSuccess?: boolean;
  errorMessage?: string | null;
} | null;

export type VerifyPinResponseAjaxResponse = {
  result?: VerifyPinResponse;
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
} | null;

export type OtpSendPinProps = Omit<
  MutateProps<SendPinDtoAjaxResponse, AjaxResponseBase, void, SendPinInput>,
  'path' | 'verb'
>;

export const OtpSendPin = (props: OtpSendPinProps) => (
  <Mutate<SendPinDtoAjaxResponse, AjaxResponseBase, void, SendPinInput>
    verb="POST"
    path={`/api/services/app/Otp/SendPin`}
    {...props}
  />
);

export type UseOtpSendPinProps = Omit<UseMutateProps<SendPinDtoAjaxResponse, void, SendPinInput>, 'path' | 'verb'>;

export const useOtpSendPin = (props: UseOtpSendPinProps) =>
  useMutate<SendPinDtoAjaxResponse, AjaxResponseBase, void, SendPinInput>(
    'POST',
    `/api/services/app/Otp/SendPin`,
    props
  );

export type OtpVerifyPinProps = Omit<
  MutateProps<VerifyPinResponseAjaxResponse, AjaxResponseBase, void, VerifyPinInput>,
  'path' | 'verb'
>;

export const OtpVerifyPin = (props: OtpVerifyPinProps) => (
  <Mutate<VerifyPinResponseAjaxResponse, AjaxResponseBase, void, VerifyPinInput>
    verb="POST"
    path={`/api/services/app/Otp/VerifyPin`}
    {...props}
  />
);

export type UseOtpVerifyPinProps = Omit<
  UseMutateProps<VerifyPinResponseAjaxResponse, void, VerifyPinInput>,
  'path' | 'verb'
>;

export const useOtpVerifyPin = (props: UseOtpVerifyPinProps) =>
  useMutate<VerifyPinResponseAjaxResponse, AjaxResponseBase, void, VerifyPinInput>(
    'POST',
    `/api/services/app/Otp/VerifyPin`,
    props
  );