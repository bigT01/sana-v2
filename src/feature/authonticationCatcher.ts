export const AuthonticationCatcher = (error: any) => {
    if (error?.response?.status === 401) {
        localStorage.setItem("quiz-storage", "");
        // window.location.reload();
    }
}
