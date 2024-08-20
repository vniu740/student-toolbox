import { createUserModel } from "@/lib/mongodb/mongodb";
import { NextResponse } from "next/server";
import { GET } from "@/app/api/user/[username]/event/route";


jest.mock("@/lib/mongodb/mongodb");
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe("GET /events", () => {
  let req, context, userModelMock, userMock;

  beforeEach(() => {
    req = {}; // GET request usually doesn't have a body
    context = {
      params: { username: "testuser" },
    };
    userMock = {
      username: "testuser",
      events: [
        { id: "1", title: "Test Event", start: new Date(), end: new Date() },
      ],
    };
    userModelMock = {
      findOne: jest.fn().mockResolvedValue(userMock),
    };
    createUserModel.mockResolvedValue(userModelMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return user events if user exists", async () => {
    await GET(req, context);
    expect(userModelMock.findOne).toHaveBeenCalledWith({
      username: "testuser",
    });
    expect(NextResponse.json).toHaveBeenCalledWith(userMock.events);
  });

  it("should return 404 if user does not exist", async () => {
    userModelMock.findOne.mockResolvedValue(null);
    await GET(req, context);
    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: "User not found" },
      { status: 404 }
    );
  });
});
