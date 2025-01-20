export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
      httpOnly: true,
      sameSite: 'none',
      maxAge:process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
      secure:true
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };