export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    console.log(token);
    
    const options = {
      httpOnly: true,
      maxAge:process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
      sameSite: 'none',
      secure:true
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };