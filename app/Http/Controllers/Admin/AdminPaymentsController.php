<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TariffFormRequest;
use App\Models\Course;
use App\Models\Module;
use App\Models\Lesson;
use App\Models\Exercise;
use App\Models\Payment;
use App\Models\Tariff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPaymentsController extends Controller
{
    /**
     * Список всех тарифов для админа
     */
    public function index()
    {
        $payments = Payment::all();

        return Inertia::render('Admin/Payments/Index', [
            'payments' => $payments
        ]);
    }

    /**
     * Форма создания тарифа
     */
    public function create()
    {
        return Inertia::render('Admin/Tariffs/form');
    }

    /**
     * Сохранение нового тарифа
     */
    public function store(TariffFormRequest $request)
    {


        $tariff = Tariff::create(
            [
                'name' => $request->name,
                'descr' => $request->descr,
                'max_devices' => $request->max_devices,
                'duration_day' => $request->duration_day,
                'price' => $request->price,
                'old_price' => $request->old_price,
                'updated_at' => now(),
                'created_at' => now(),
            ]
        );

        if ($tariff) {
            return redirect()->route('admin.tariffs.index')->with('success', 'created sucessfully');
        }
        return redirect()->route('admin.tariffs.index')->with('error', 'Unable to create tariff. Try again');
    }

    /**
     * Управление модулями тарифа
     */
    public function show(Course $course)
    {
        $course->load([
            'modules' => function ($query) {
                $query->withCount('lessons')->with('lessons')->orderBy('order');
            }
        ]);

        return Inertia::render('Admin/Courses/Modules', [
            'course' => $course
        ]);
    }

    /**
     * Форма редактирования тарифа
     */
    public function edit(Tariff $tariff)
    {


        return Inertia::render('Admin/Tariffs/form', [
            'tariff' => $tariff,
        ]);

    }

    /**
     * Обновление тарифа
     */
    public function update(TariffFormRequest $request, Tariff $tariff)
    {

        $tariff->update(
            [
                'name' => $request->name,
                'descr' => $request->descr,
                'max_devices' => $request->max_devices,
                'duration_day' => $request->duration_day,
                'price' => $request->price,
                'old_price' => $request->old_price,
                'updated_at' => now(),
            ]
        );

        if ($tariff) {
            return redirect()->route('admin.tariffs.index')->with('success', 'updated successfull');
        }
        return redirect()->route('admin.tariffs.index')->with('error', 'Unable to update tariff. Try again');
    }

    /**
     * Удаление тарифа
     */
    public function destroy(Tariff $tariff)
    {
        $tariff->delete();

        return redirect()->route('admin.tariffs.index')
            ->with('success', 'Тариф удален успешно!');
    }

    /**
     * Создание модуля
     */
    public function storeModule(Request $request, Course $course)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string',
            'description' => 'nullable|string',
            'order' => 'integer',
        ]);

        $module = $course->modules()->create($validated);

        return back()->with('success', 'Модуль создан успешно!');
    }

    /**
     * Создание урока
     */
    public function storeLesson(Request $request, Module $module)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string',
            'content' => 'required|string',
            'type' => 'required|in:theory,practice,quiz',
            'order' => 'integer',
            'estimated_time' => 'integer|min:1',
        ]);

        $lesson = $module->lessons()->create($validated);

        return back()->with('success', 'Урок создан успешно!');
    }

    /**
     * Форма редактирования урока
     */
    public function editLesson(Lesson $lesson)
    {
        $lesson->load(['module.course', 'exercises']);

        return Inertia::render('Admin/Lessons/Edit', [
            'lesson' => $lesson
        ]);
    }

    /**
     * Новый улучшенный редактор урока
     */
    public function editLessonNew(Lesson $lesson)
    {
        $lesson->load(['module.course', 'exercises']);

        return Inertia::render('Admin/Lessons/EditNew', [
            'lesson' => $lesson
        ]);
    }

    /**
     * Обновление урока
     */
    public function updateLesson(Request $request, Lesson $lesson)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string',
            'content' => 'required|string',
            'type' => 'required|in:theory,practice,quiz',
            'order' => 'integer',
            'estimated_time' => 'integer|min:1',
        ]);

        $lesson->update($validated);

        return back()->with('success', 'Урок обновлен успешно!');
    }

    /**
     * Обновление модуля
     */
    public function updateModule(Request $request, Module $module)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string',
            'description' => 'nullable|string',
            'order' => 'integer',
        ]);

        $module->update($validated);

        return back()->with('success', 'Модуль обновлен успешно!');
    }

    /**
     * Удаление модуля
     */
    public function destroyModule(Module $module)
    {
        $module->delete();

        return back()->with('success', 'Модуль удален успешно!');
    }

    /**
     * Удаление урока
     */
    public function destroyLesson(Lesson $lesson)
    {
        $lesson->delete();

        return back()->with('success', 'Урок удален успешно!');
    }

    /**
     * Создание упражнения
     */
    public function storeExercise(Request $request, Lesson $lesson)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'starter_code' => 'nullable|string',
            'solution' => 'nullable|string',
            'hints' => 'nullable|array',
            'test_cases' => 'nullable|array',
            'language' => 'required|in:javascript,php',
            'order' => 'integer',
        ]);

        $validated['hints'] = json_encode($validated['hints'] ?? []);
        $validated['test_cases'] = json_encode($validated['test_cases'] ?? []);

        $exercise = $lesson->exercises()->create($validated);

        return back()->with('success', 'Упражнение создано успешно!');
    }
}

