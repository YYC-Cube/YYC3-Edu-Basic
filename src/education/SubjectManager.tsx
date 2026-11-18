import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 学科分类管理器
export const SubjectFolderManager: React.FC = () => {
  const [folders, setFolders] = useState([
    {
      id: 1,
      name: "数学",
      icon: "📐",
      subfolders: ["代数", "几何", "统计", "概率"],
      projects: ["函数图像", "几何绘图器", "数据可视化"],
      color: "blue",
    },
    {
      id: 2,
      name: "语文",
      icon: "📚",
      subfolders: ["阅读理解", "写作训练", "诗词鉴赏", "文言文"],
      projects: ["诗词生成器", "作文助手", "古文翻译"],
      color: "green",
    },
    {
      id: 3,
      name: "英语",
      icon: "🇬🇧",
      subfolders: ["听力", "口语", "阅读", "写作", "语法"],
      projects: ["单词记忆", "语法练习", "口语对话"],
      color: "purple",
    },
    {
      id: 4,
      name: "科学",
      icon: "🔬",
      subfolders: ["物理", "化学", "生物", "地理"],
      projects: ["虚拟实验室", "分子结构", "生态系统"],
      color: "orange",
    },
    {
      id: 5,
      name: "信息技术",
      icon: "💻",
      subfolders: ["编程基础", "算法逻辑", "数据结构", "网络安全"],
      projects: ["小游戏开发", "网站制作", "数据库设计"],
      color: "indigo",
    },
  ]);

  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const colorClasses: Record<string, string> = {
    blue: "border-blue-200 bg-blue-50 text-blue-800",
    green: "border-green-200 bg-green-50 text-green-800",
    purple: "border-purple-200 bg-purple-50 text-purple-800",
    orange: "border-orange-200 bg-orange-50 text-orange-800",
    indigo: "border-indigo-200 bg-indigo-50 text-indigo-800",
  };

  const filteredFolders = folders.filter(
    (folder) =>
      folder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      folder.subfolders.some((sub) =>
        sub.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const createNewFolder = () => {
    const newFolder = {
      id: Date.now(),
      name: "新学科",
      icon: "📁",
      subfolders: [],
      projects: [],
      color: "blue" as const,
    };
    setFolders([...folders, newFolder]);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          📁 学科分类管理中心
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
          >
            {viewMode === "grid" ? "📋" : "🎛️"}{" "}
            {viewMode === "grid" ? "列表视图" : "网格视图"}
          </Button>
          <Button
            onClick={createNewFolder}
            className="bg-blue-600 hover:bg-blue-700"
          >
            ➕ 新建学科
          </Button>
        </div>
      </div>

      {/* 搜索栏 */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索学科或子分类..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
        </div>
      </div>

      {/* 学科文件夹展示 */}
      <div
        className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-4 mb-6`}
      >
        {filteredFolders.map((folder) => (
          <Card
            key={folder.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedFolder === folder.id ? "ring-2 ring-blue-500" : ""
            } ${colorClasses[folder.color]}`}
            onClick={() =>
              setSelectedFolder(selectedFolder === folder.id ? null : folder.id)
            }
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <span className="text-2xl">{folder.icon}</span>
                <span>{folder.name}</span>
                <span className="ml-auto text-sm opacity-60">
                  {folder.projects.length} 项目
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm opacity-75">
                  子分类: {folder.subfolders.join(", ")}
                </div>
                {selectedFolder === folder.id && (
                  <div className="mt-4 space-y-3 border-t pt-3">
                    {/* 子文件夹管理 */}
                    <div>
                      <h5 className="font-medium mb-2">📂 子分类管理</h5>
                      <div className="flex flex-wrap gap-1">
                        {folder.subfolders.map((subfolder, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white bg-opacity-70 rounded text-xs"
                          >
                            {subfolder}
                          </span>
                        ))}
                        <button className="px-2 py-1 bg-white bg-opacity-70 rounded text-xs hover:bg-opacity-90">
                          + 添加
                        </button>
                      </div>
                    </div>

                    {/* 项目列表 */}
                    <div>
                      <h5 className="font-medium mb-2">🎯 学习项目</h5>
                      <div className="space-y-1">
                        {folder.projects.map((project, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center text-sm"
                          >
                            <span>• {project}</span>
                            <button className="text-blue-600 hover:text-blue-800">
                              编辑
                            </button>
                          </div>
                        ))}
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          + 新建项目
                        </button>
                      </div>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        🎨 自定义
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        📤 导出
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 快速创建模板 */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium mb-3">🚀 快速创建学科模板</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { name: "理科类", icon: "🧮", subjects: ["数学", "物理", "化学"] },
            { name: "文科类", icon: "📖", subjects: ["语文", "历史", "地理"] },
            { name: "语言类", icon: "🌍", subjects: ["英语", "日语", "法语"] },
            { name: "艺术类", icon: "🎨", subjects: ["美术", "音乐", "舞蹈"] },
          ].map((template) => (
            <button
              key={template.name}
              className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow text-left"
              onClick={() => {
                template.subjects.forEach((subject) => {
                  const newFolder = {
                    id: Date.now() + Math.random(),
                    name: subject,
                    icon: template.icon,
                    subfolders: ["基础", "进阶", "实践"],
                    projects: [],
                    color: "blue" as const,
                  };
                  setFolders((prev) => [...prev, newFolder]);
                });
              }}
            >
              <div className="text-xl mb-1">{template.icon}</div>
              <div className="font-medium text-sm">{template.name}</div>
              <div className="text-xs text-gray-500">
                {template.subjects.join(", ")}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 学习路径规划器
export const LearningPathPlanner: React.FC<{
  subject: string;
  level: string;
}> = ({ subject, level }) => {
  // 定义路径项接口
  interface PathItem {
    id: number;
    title: string;
    desc: string;
    difficulty: string;
    time: string;
  }

  const [currentPath, setCurrentPath] = useState<PathItem[]>([]);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const generateLearningPath = (subject: string, level: string) => {
    // 学科知识路径模板
    const pathTemplates: Record<string, Record<string, PathItem[]>> = {
      数学: {
        小学: [
          {
            id: 1,
            title: "数字认知",
            desc: "学习数字0-100",
            difficulty: "简单",
            time: "1周",
          },
          {
            id: 2,
            title: "加减运算",
            desc: "掌握基本加减法",
            difficulty: "简单",
            time: "2周",
          },
          {
            id: 3,
            title: "乘除运算",
            desc: "理解乘法表和除法",
            difficulty: "中等",
            time: "3周",
          },
          {
            id: 4,
            title: "几何图形",
            desc: "认识基本图形",
            difficulty: "中等",
            time: "2周",
          },
          {
            id: 5,
            title: "应用题",
            desc: "解决实际问题",
            difficulty: "困难",
            time: "4周",
          },
        ],
        初中: [
          {
            id: 1,
            title: "代数基础",
            desc: "变量和代数式",
            difficulty: "中等",
            time: "2周",
          },
          {
            id: 2,
            title: "方程求解",
            desc: "一元一次方程",
            difficulty: "中等",
            time: "3周",
          },
          {
            id: 3,
            title: "函数概念",
            desc: "理解函数关系",
            difficulty: "困难",
            time: "4周",
          },
          {
            id: 4,
            title: "几何证明",
            desc: "掌握证明方法",
            difficulty: "困难",
            time: "5周",
          },
          {
            id: 5,
            title: "数据统计",
            desc: "统计与概率",
            difficulty: "中等",
            time: "3周",
          },
        ],
      },
      编程: {
        大学: [
          {
            id: 1,
            title: "编程基础",
            desc: "语法和基本概念",
            difficulty: "简单",
            time: "2周",
          },
          {
            id: 2,
            title: "数据结构",
            desc: "数组、链表、栈队列",
            difficulty: "中等",
            time: "4周",
          },
          {
            id: 3,
            title: "算法设计",
            desc: "排序、搜索算法",
            difficulty: "困难",
            time: "6周",
          },
          {
            id: 4,
            title: "面向对象",
            desc: "OOP设计模式",
            difficulty: "困难",
            time: "4周",
          },
          {
            id: 5,
            title: "项目实战",
            desc: "完整项目开发",
            difficulty: "困难",
            time: "8周",
          },
        ],
      },
    };

    // 确保level是有效的键类型
    const subjectData = pathTemplates[subject as keyof typeof pathTemplates];
    // 定义有效级别类型
    type ValidLevel = keyof typeof subjectData;
    const validLevel = (Object.keys(subjectData) as ValidLevel[]).includes(
      level as ValidLevel,
    )
      ? (level as ValidLevel)
      : ("beginner" as ValidLevel);
    const path = subjectData?.[validLevel] || [
      {
        id: 1,
        title: "基础学习",
        desc: "掌握基本概念",
        difficulty: "简单",
        time: "2周",
      },
      {
        id: 2,
        title: "进阶练习",
        desc: "深入理解原理",
        difficulty: "中等",
        time: "3周",
      },
      {
        id: 3,
        title: "实践应用",
        desc: "解决实际问题",
        difficulty: "困难",
        time: "4周",
      },
    ];

    setCurrentPath(path);
  };

  const difficultyColors = {
    简单: "bg-green-100 text-green-800",
    中等: "bg-yellow-100 text-yellow-800",
    困难: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-purple-700">🛣️ 学习路径规划器</h3>
        <Button
          onClick={() => generateLearningPath(subject, level)}
          className="bg-purple-600 hover:bg-purple-700"
        >
          🎯 生成学习路径
        </Button>
      </div>

      {currentPath.length > 0 ? (
        <div className="space-y-4">
          {/* 进度概览 */}
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">📊 学习进度</span>
              <span className="text-sm text-gray-600">
                {completedSteps.length} / {currentPath.length} 完成
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all"
                style={{
                  width: `${(completedSteps.length / currentPath.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* 学习路径步骤 */}
          <div className="space-y-3">
            {currentPath.map((step, index) => (
              <div
                key={step.id}
                className={`border rounded-lg p-4 transition-all ${
                  completedSteps.includes(step.id)
                    ? "bg-green-50 border-green-200"
                    : index === completedSteps.length
                      ? "bg-blue-50 border-blue-200 ring-2 ring-blue-300"
                      : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          completedSteps.includes(step.id)
                            ? "bg-green-600 text-white"
                            : index === completedSteps.length
                              ? "bg-blue-600 text-white"
                              : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {completedSteps.includes(step.id) ? "✓" : index + 1}
                      </span>
                      <h4 className="font-semibold text-gray-800">
                        {step.title}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${difficultyColors[step.difficulty as keyof typeof difficultyColors]}`}
                      >
                        {step.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2 ml-11">{step.desc}</p>
                    <div className="flex gap-4 ml-11 text-sm text-gray-500">
                      <span>⏱️ 预计时间: {step.time}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!completedSteps.includes(step.id) && (
                      <Button
                        size="sm"
                        variant={
                          index === completedSteps.length
                            ? "default"
                            : "outline"
                        }
                        onClick={() => {
                          if (index === completedSteps.length) {
                            setCompletedSteps([...completedSteps, step.id]);
                          }
                        }}
                        disabled={index > completedSteps.length}
                      >
                        {index === completedSteps.length
                          ? "开始学习"
                          : "等待中"}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 学习建议 */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h5 className="font-medium text-blue-800 mb-2">💡 学习建议</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 按照路径顺序学习，确保基础扎实</li>
              <li>• 每完成一个步骤，及时复习和总结</li>
              <li>• 遇到困难及时寻求帮助或调整学习方法</li>
              <li>• 结合实践项目巩固理论知识</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          点击"生成学习路径"开始规划你的学习计划
        </div>
      )}
    </div>
  );
};
