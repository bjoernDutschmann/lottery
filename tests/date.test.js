//import * as service from "@/service/service"
const service = require('@/service/service');

test("getData", () => {
  expect(service.getDate("21 Jan 2022")).toBe("21. Januar 2022");
});
