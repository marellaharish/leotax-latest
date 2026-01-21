// Types for API requests and responses
interface ApiResponse<T = any> extends Response {
  data?: T;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface UserInfo {
  id?: string;
  email: string;
  name: string;
  // Add other user properties as needed
}

interface FileData {
  id: string;
  name: string;
  // Add other file properties as needed
}

interface DashboardCount {
  totalFiles?: number;
  // Add other dashboard metrics as needed
}

interface LogEventData {
  action: string;
  timestamp: Date;
  // Add other log event properties as needed
}

const PRIMARY_SERVER_URL: string = 'http://localhost:5010/';
let activeServerURL: string = PRIMARY_SERVER_URL;

const token: string | null = localStorage.getItem("token");

/************************************************************************/
async function connectToAPI<T = any>(
  tcontextURL: string,
  tmethod: string = 'GET',
  data?: any
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(activeServerURL + tcontextURL, {
      method: tmethod ? tmethod : "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token == null ? localStorage.getItem("token") : token
          }`,
      },
      body: JSON.stringify(data),
    });

    console.log(response.status);
    if (response.status === 401) {
      localStorage.setItem(
        "SError",
        "Session Timed out or Unauthorized Access"
      );
      localStorage.removeItem("token");
      localStorage.removeItem("loggedUserInfo");
      window.location.href = "/login";
      // Return a rejected promise since the user is being redirected
      return Promise.reject(new Error('Unauthorized: Redirecting to login'));
    }
    return response;
  } catch (error) {
    console.error("Error connecting to API:", error);
    // Return a rejected promise with the error
    throw error;
  }
}

/************************************************************************/

export async function loginUser(credentials: LoginCredentials): Promise<Response> {
  console.log(credentials);
  const response = await fetch(activeServerURL + "api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  console.log("Checking login API response");

  return response;
}
/**************BusinesInfo View ***************/
export async function createUserInfo(userData: any): Promise<Response> {
  try {
    const response = await fetch(activeServerURL + "api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Return the response as-is to handle status codes in the component
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
export async function logOutUser(bId: string): Promise<ApiResponse> {
  return await connectToAPI(`login/logout/${bId}`, "GET");
}

export async function uploadInvoice(date: FormData): Promise<ApiResponse> {
  return await connectToAPI(`api/invoice/upload`, "POST", date);
}

export async function downloadFile(key: string): Promise<ApiResponse<Blob>> {
  console.log(key);
  return await connectToAPI(`api/invoice/download/${key}`);
}
export async function getFilesById(id: string): Promise<ApiResponse<FileData[]>> {
  return await connectToAPI(`api/invoice/gefiles/${id}`);
}

export async function deleteFilesById(id: string): Promise<ApiResponse> {
  return await connectToAPI(`api/invoice/delete/${id}`, "DELETE");
}

export async function createFilehistory(id: string, data: any): Promise<ApiResponse> {
  return await connectToAPI(`api/invoice/filehistory/${id}`, "PUT", data);
}

export async function getFilehistory(id: string): Promise<ApiResponse> {
  return await connectToAPI(`api/invoice/filehistory/${id}`);
}

export async function getcopyfilebyid(id: string, type: string): Promise<ApiResponse> {
  return await connectToAPI(`api/invoice/getcopyfile/${id}?type=${type}`);
}
export async function deletecopyfilebyid(id: string): Promise<ApiResponse> {
  return await connectToAPI(`api/invoice/getcopyfile/${id}`, "DELETE");
}

export async function getDashboardCount(id: string): Promise<ApiResponse<DashboardCount>> {
  return await connectToAPI(`api/dashboad/${id}`);
}

export async function logEvent(data: LogEventData, id: string): Promise<ApiResponse> {
  return await connectToAPI(`api/logEvent/${id}`, "POST", data);
}
export async function getlogEvent(id: string): Promise<ApiResponse<LogEventData[]>> {
  console.log(id);
  return await connectToAPI(`api/logevent/${id}`);
}

export async function getadminDashboardCount(id: string): Promise<ApiResponse<DashboardCount>> {
  console.log(id);
  return await connectToAPI(`api/dashboad/admin/${id}`);
}

export async function getallusers(id: string): Promise<ApiResponse<UserInfo[]>> {
  return await connectToAPI(`api/user/allusers/${id}`);
}

export async function deleteuserbyId(id: string): Promise<ApiResponse> {
  return await connectToAPI(`api/user/${id}`, "DELETE");
}

export async function uploadTaxForm(date: FormData): Promise<ApiResponse> {
  return await connectToAPI(`api/invoice/taxupload`, "POST", date);
}

export async function getTaxForm(): Promise<ApiResponse<FileData[]>> {
  return await connectToAPI(`api/invoice/getTaxForm`);
}

export async function getalltaxform(): Promise<ApiResponse<FileData[]>> {
  return await connectToAPI(`api/invoice/getalltaxform`);
}
export async function deletetaxfilebyid(id: string): Promise<ApiResponse> {
  return await connectToAPI(`api/invoice/taxfile/${id}`, "DELETE");
}

