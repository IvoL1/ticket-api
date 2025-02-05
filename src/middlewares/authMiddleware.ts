import { Request, Response, NextFunction } from 'express';
import { ERROR_MESSAGES } from '../utils/messagesError';

export const validateCreateTicket = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { description, equipment, user_name } = req.body;

  if (
    typeof description !== 'string' ||
    typeof equipment !== 'string' ||
    typeof user_name !== 'string'
  ) {
    res.status(400).json({
      success: false,
      error: ERROR_MESSAGES.INVALID_TYPE,
      code: '400',
    });
    return;
  }

  description = description.trim();
  equipment = equipment.trim();
  user_name = user_name.trim();

  if (!description || !equipment || !user_name) {
    res.status(400).json({
      success: false,
      error: ERROR_MESSAGES.EMPTY_ERROR,
      code: '400',
    });
    return;
  }

  if (description.length < 5 || description.length > 255) {
    res.status(400).json({
      success: false,
      error: ERROR_MESSAGES.INVALID_DESCRIPTION,
      code: '400',
    });
    return;
  }

  if (equipment.length < 3 || equipment.length > 100) {
    res.status(400).json({
      success: false,
      error: ERROR_MESSAGES.INVALID_EQUIPMENT,
      code: '400',
    });
    return;
  }

  if (user_name.length < 3 || user_name.length > 50) {
    res.status(400).json({
      success: false,
      error: ERROR_MESSAGES.INVALID_USER_NAME,
      code: '400',
    });
    return;
  }

  next();
};
