<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class TariffFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|string|max:255",
            "descr" => "required|string|max:1000",
            "max_devices" => "required|numeric",
            "duration_day" => "required|numeric",
            "price" => "required|numeric",
            "old_price" => "nullable|numeric",
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Введите название тарифа',
            'name.string' => 'Название должно быть строкой',
            'name.max' => 'Название не должно быть больше чем 255 символов',
            'descr.required' => 'Введите описание',
            'descr.string' => 'Описание должно быть строкой',
            'descr.max' => 'Описание должно быть максимум 1000 символов',
            'max_devices.required' => 'Кол-во устройств обязательно',
            'max_devices.numeric' => 'Кол-во устройств должно быть числом',
            'max_devices.required' => 'Кол-во устройств обязательное поле',
            'price.numeric' => 'Цена должна быть числом',
            'price.required' => 'Цена должна быть указана',
            'old_price.numeric' => 'Старая цена должна быть числом',
            
            'duration_day.numeric' => 'Кол-во дней должно быть числом',
            'duration_day.required' => 'Кол-во дней должно быть указано',
        ];
    }
}
