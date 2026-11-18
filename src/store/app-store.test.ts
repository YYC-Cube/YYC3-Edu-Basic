import { act } from "@testing-library/react";
import { useAppStore, type UserProfile } from "./app-store";

describe("AppStore Zustand Store", () => {
  it("should have correct initial state", () => {
    const { user, isAuthenticated, theme, language } = useAppStore.getState();

    expect(user).toBeNull();
    expect(isAuthenticated).toBe(false);
    expect(theme).toBe("auto");
    expect(language).toBe("zh-CN");
  });

  it("should set user and update authentication", () => {
    const user: UserProfile = {
      id: "1",
      name: "YYC³",
      email: "admin@0379.email",
    };

    act(() => {
      useAppStore.getState().setUser(user);
    });

    expect(useAppStore.getState().user).toEqual(user);
    expect(useAppStore.getState().isAuthenticated).toBe(true);
  });

  it("should toggle theme", () => {
    const before = useAppStore.getState().theme;

    act(() => {
      useAppStore.getState().toggleTheme();
    });

    expect(useAppStore.getState().theme).not.toBe(before);
  });

  it("should update accessibility settings", () => {
    act(() => {
      useAppStore.getState().updateAccessibility({
        fontSize: 20,
        highContrast: true,
      });
    });

    expect(useAppStore.getState().accessibility).toEqual({
      fontSize: 20,
      highContrast: true,
    });
  });
});
