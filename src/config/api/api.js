const http = uni.$u.http
/**账号密码登录 */
export function loginApi(data) {
	return http.post("/auth/login", { ...data, custom: { noToken: true } });
}
/**短信登录 */
export function smsLoginApi(data) {
	return http.post("/auth/smsLogin", data);
}
/**登出 */
export function loginOutApi(data) {
	return http.post("/user/getAppSignOut", data);
}
/**更新学员手机号 */
export function updatePhoneApi(data) {
	return http.post("/train/user/updatePhone", data);
}

/**个人信息 */
export function getUserInfo(data) {
	return http.get("/train/user/getInfo", data);
}
/**发送验证码 */
export function verifyCodeApi(data) {
	return http.post("/auth/common/validateSms/getVerifyCode", data);
}
/**查询小程序端我的课程列表 */
export function querySmallProgramMyCourseApi(data) {
	return http.post("/train/my-course/querySmallProgramMyCourse", data);
}
/**查询小程序端我的课程下的科目列表 */
export function queryMyCourseSubjectApi(data) {
	return http.post("/train/my-course/queryMyCourseSubject", data);
}
/**手动修改学员签到状态 */
export function scanCodeSignInApi(data) {
	return http.post("/train/my-course/scanCodeSignIn", data);
}
/**学员端小程序-获取在线学习课件 */
export function onlineCourseListApi(data) {
	return http.post("/train/training-courseware/getOnlineCourseware", data);
}
/**学员端小程序-一码通行获得用户二维码 */
export function qrCodeApi(data) {
	return http.get("/train/user/getQrCode", data);
}
/**查询小程序端我的培训记录列表 */
export function queryMyTrainRecordApi(data) {
	return http.post("/train/my-train-record/queryMyTrainRecord", data);
}
/**查询试卷题目列表 */
export function examQuestionListApi(data) {
	return http.post("/train/online-examination/queryExamQuestionList", data);
}
/**交卷生成考试成绩
 */
export function completeExamApi(data) {
	return http.post("/train/online-examination/completeExam", data);
}
/**查询小程序端我的考试列表 */
export function queryMyExaminationApi(data) {
	return http.post("/train/online-examination/queryMyExamination", data);
}
/**查询考试成绩列表 */
export function queryExamAchievementListApi(data) {
	return http.post("/train/online-examination/queryExamAchievementList?name=" + data.name, data);
}
/**学员端小程序-获得学员学习进度 */
export function studentProgressApi(params) {
	return http.get("/train/training-courseware/get?id=" + params.id, params);
}
/**学员端小程序-学员端小程序-更新学员学习进度 */
export function studentProgressSaveApi(data) {
	return http.post("/train/student-learn-progress/saveOrUpdate", data);
}
/**学员端小程序-我的证书 */
export function getMyCertificateApi(data) {
	return http.post("/train/certificate-issue/getMyCertificate", data);
}
