//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

const API_BASED_URL = "http://localhost:3003";

import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	CancelToken,
} from "axios";

import * as moment from "moment";

export class ApiService {
	private instance: AxiosInstance;
	private baseUrl: string;
	protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
		undefined;

	constructor(baseUrl?: string, instance?: AxiosInstance) {
		this.instance = instance ? instance : axios.create();

		this.baseUrl =
			baseUrl !== undefined && baseUrl !== null ? baseUrl : API_BASED_URL;

		const token =
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJFbWFpbCI6ImZvb0BiYXIuY29tIiwiaWF0IjoxNjk2OTM0NDU0LCJleHAiOjE2OTcwMjA4NTR9.bgOqGUqKWZxJUkySPPSnidRikDwRZgCYahOGdpKBgIg"
		;

		if (token) {
			this.instance.defaults.headers.common["Authorization"] =
				"Bearer " + token;
		} else {
			this.instance.defaults.headers.common["Authorization"] = "";
		}
	}

    /**
     * @return A list of all users
     */
    userAll( cancelToken?: CancelToken | undefined): Promise<UserGetDto[]> {
        let url_ = this.baseUrl + "/user/all";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUserAll(_response);
        });
    }

    protected processUserAll(response: AxiosResponse): Promise<UserGetDto[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            if (Array.isArray(resultDatadefault)) {
                resultdefault = [] as any;
                for (let item of resultDatadefault)
                    resultdefault!.push(UserGetDto.fromJS(item));
            }
            else {
                resultdefault = <any>null;
            }
            return Promise.resolve<UserGetDto[]>(resultdefault);

        }
    }

    /**
     * @return The user with specified id
     */
    userById(id: number, cancelToken?: CancelToken | undefined): Promise<UserGetDto> {
        let url_ = this.baseUrl + "/user/byId/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUserById(_response);
        });
    }

    protected processUserById(response: AxiosResponse): Promise<UserGetDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = UserGetDto.fromJS(resultDatadefault);
            return Promise.resolve<UserGetDto>(resultdefault);

        }
    }

    /**
     * @return The user with specified email
     */
    userByEmail(body: StringEmailDto, cancelToken?: CancelToken | undefined): Promise<UserGetDto> {
        let url_ = this.baseUrl + "/user/byEmail";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUserByEmail(_response);
        });
    }

    protected processUserByEmail(response: AxiosResponse): Promise<UserGetDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = UserGetDto.fromJS(resultDatadefault);
            return Promise.resolve<UserGetDto>(resultdefault);

        }
    }

    /**
     * @return The updated user
     */
    userUpdate(body: UserUpdateDto, cancelToken?: CancelToken | undefined): Promise<UserGetDto> {
        let url_ = this.baseUrl + "/user/update";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "PUT",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUserUpdate(_response);
        });
    }

    protected processUserUpdate(response: AxiosResponse): Promise<UserGetDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = UserGetDto.fromJS(resultDatadefault);
            return Promise.resolve<UserGetDto>(resultdefault);
        }
    }

    /**
     * @param file (optional)
     * @return Upload avatar image for a user
     */
    userUploadAvatar(file: FileParameter | undefined, cancelToken?: CancelToken | undefined): Promise<UserGetDto> {
        let url_ = this.baseUrl + "/user/uploadAvatar";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (file === null || file === undefined)
            throw new Error("The parameter 'file' cannot be null.");
        else
            content_.append("file", file.data, file.fileName ? file.fileName : "file");

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUserUploadAvatar(_response);
        });
    }

    protected processUserUploadAvatar(response: AxiosResponse): Promise<UserGetDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        {
            const _responseText = response.data;
            let resultdefault: any = null;
            let resultDatadefault  = _responseText;
            resultdefault = UserGetDto.fromJS(resultDatadefault);
            return Promise.resolve<UserGetDto>(resultdefault);
        }
    }

    authTest( cancelToken?: CancelToken | undefined): Promise<any> {
        let url_ = this.baseUrl + "/auth/test";
        url_ = url_.replace(/[?&]$/, "");
        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processAuthTest(_response);
        });
    }

    protected processAuthTest(response: AxiosResponse): Promise<any> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
                result200 = resultData200 !== undefined ? resultData200 : <any>null;

            return Promise.resolve<any>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<any>(null as any);
    }

    authSignUp(body: RegisterDto, cancelToken?: CancelToken | undefined): Promise<UserGetDto> {
        let url_ = this.baseUrl + "/auth/signUp";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processAuthSignUp(_response);
        });
    }

    protected processAuthSignUp(response: AxiosResponse): Promise<UserGetDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 201) {
            const _responseText = response.data;
            let result201: any = null;
            let resultData201  = _responseText;
            result201 = UserGetDto.fromJS(resultData201);
            return Promise.resolve<UserGetDto>(result201);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<UserGetDto>(null as any);
    }

    authSignIn(body: LoginDto, cancelToken?: CancelToken | undefined): Promise<AccessTokenDto> {
        let url_ = this.baseUrl + "/auth/signIn";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processAuthSignIn(_response);
        });
    }

    protected processAuthSignIn(response: AxiosResponse): Promise<AccessTokenDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = AccessTokenDto.fromJS(resultData200);
            return Promise.resolve<AccessTokenDto>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<AccessTokenDto>(null as any);
    }

    authForgotPwd(body: StringEmailDto, cancelToken?: CancelToken | undefined): Promise<void> {
        let url_ = this.baseUrl + "/auth/forgotPwd";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processAuthForgotPwd(_response);
        });
    }

    protected processAuthForgotPwd(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(null as any);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(null as any);
    }

    authResetPwd(body: ResetPwdDto, cancelToken?: CancelToken | undefined): Promise<void> {
        let url_ = this.baseUrl + "/auth/resetPwd";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processAuthResetPwd(_response);
        });
    }

    protected processAuthResetPwd(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(null as any);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(null as any);
    }
}

export class UserGetDto implements IUserGetDto {
    id!: number;
    email!: string;
    firstname?: string;
    lastname?: string;
    avatarUrl?: string;

    [key: string]: any;

    constructor(data?: IUserGetDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.id = _data["id"];
            this.email = _data["email"];
            this.firstname = _data["firstname"];
            this.lastname = _data["lastname"];
            this.avatarUrl = _data["avatarUrl"];
        }
    }

    static fromJS(data: any): UserGetDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserGetDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["id"] = this.id;
        data["email"] = this.email;
        data["firstname"] = this.firstname;
        data["lastname"] = this.lastname;
        data["avatarUrl"] = this.avatarUrl;
        return data;
    }
}

export interface IUserGetDto {
    id: number;
    email: string;
    firstname?: string;
    lastname?: string;
    avatarUrl?: string;

    [key: string]: any;
}

export class StringEmailDto implements IStringEmailDto {
    email!: string;

    [key: string]: any;

    constructor(data?: IStringEmailDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.email = _data["email"];
        }
    }

    static fromJS(data: any): StringEmailDto {
        data = typeof data === 'object' ? data : {};
        let result = new StringEmailDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["email"] = this.email;
        return data;
    }
}

export interface IStringEmailDto {
    email: string;

    [key: string]: any;
}

export class UserUpdateDto implements IUserUpdateDto {
    id!: number;
    email!: string;
    firstname?: string;
    lastname?: string;

    [key: string]: any;

    constructor(data?: IUserUpdateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.id = _data["id"];
            this.email = _data["email"];
            this.firstname = _data["firstname"];
            this.lastname = _data["lastname"];
        }
    }

    static fromJS(data: any): UserUpdateDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserUpdateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["id"] = this.id;
        data["email"] = this.email;
        data["firstname"] = this.firstname;
        data["lastname"] = this.lastname;
        return data;
    }
}

export interface IUserUpdateDto {
    id: number;
    email: string;
    firstname?: string;
    lastname?: string;

    [key: string]: any;
}

export class RegisterDto implements IRegisterDto {
    email!: string;
    password!: string;

    [key: string]: any;

    constructor(data?: IRegisterDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.email = _data["email"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): RegisterDto {
        data = typeof data === 'object' ? data : {};
        let result = new RegisterDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["email"] = this.email;
        data["password"] = this.password;
        return data;
    }
}

export interface IRegisterDto {
    email: string;
    password: string;

    [key: string]: any;
}

export class LoginDto implements ILoginDto {
    email!: string;
    password!: string;

    [key: string]: any;

    constructor(data?: ILoginDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.email = _data["email"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): LoginDto {
        data = typeof data === 'object' ? data : {};
        let result = new LoginDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["email"] = this.email;
        data["password"] = this.password;
        return data;
    }
}

export interface ILoginDto {
    email: string;
    password: string;

    [key: string]: any;
}

export class AccessTokenDto implements IAccessTokenDto {
    accessToken!: string;

    [key: string]: any;

    constructor(data?: IAccessTokenDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.accessToken = _data["accessToken"];
        }
    }

    static fromJS(data: any): AccessTokenDto {
        data = typeof data === 'object' ? data : {};
        let result = new AccessTokenDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["accessToken"] = this.accessToken;
        return data;
    }
}

export interface IAccessTokenDto {
    accessToken: string;

    [key: string]: any;
}

export class ResetPwdDto implements IResetPwdDto {
    password!: string;
    token!: string;

    [key: string]: any;

    constructor(data?: IResetPwdDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.password = _data["password"];
            this.token = _data["token"];
        }
    }

    static fromJS(data: any): ResetPwdDto {
        data = typeof data === 'object' ? data : {};
        let result = new ResetPwdDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["password"] = this.password;
        data["token"] = this.token;
        return data;
    }
}

export interface IResetPwdDto {
    password: string;
    token: string;

    [key: string]: any;
}

export interface FileParameter {
    data: any;
    fileName: string;
}

export class GenerateApiServiceException extends Error {
	message: string;
	status: number;
	response: string;
	headers: { [key: string]: any };
	result: any;

	constructor(
		message: string,
		status: number,
		response: string | unknown,
		headers: { [key: string]: any },
		result: any
	) {
		super();

		this.message = message;
		this.status = status;
		this.response = typeof response == "string" ? response : "";
		this.headers = headers;
		this.result = result;
	}

	protected isGenerateApiServiceException = true;

	static isGenerateApiServiceException(
		obj: any
	): obj is GenerateApiServiceException {
		return obj.isGenerateApiServiceException === true;
	}
}

function throwException(
	message: string,
	status: number,
	response: string | unknown,
	headers: { [key: string]: any },
	result?: any
): any {
	if (result !== null && result !== undefined) throw result;
	else
		throw new GenerateApiServiceException(
			message,
			status,
			response,
			headers,
			null
		);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
	return obj && obj.isAxiosError === true;
}
