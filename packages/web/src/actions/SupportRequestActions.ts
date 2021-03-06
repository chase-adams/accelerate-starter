import { FeathersError } from '@feathersjs/errors';
import { createAsyncAction } from 'typesafe-actions';

import { ISupportRequest } from '@accelerate-starter/core';

/*
 * CREATE SUPPORT REQUEST
 */

export const createSupportRequest = createAsyncAction(
  'support/CREATE_REQUEST',
  'support/CREATE_SUCCESS',
  'support/CREATE_FAILURE'
)<ISupportRequest, ISupportRequest, FeathersError>();
