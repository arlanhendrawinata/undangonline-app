<?php 
namespace App\Enums;

enum WishEnum: string
{
    // case NAMEINAPP = 'name-in-database';

    case ATTEND = 'attend';
    case HESITATE = 'hesitate';
    case ABSENT = 'absent';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label_eng(): string
    {
        return match ($this) {
            static::ATTEND => 'Attend',
            static::HESITATE => 'Hesitate',
            static::ABSENT => 'Absent',
        };
    }

    public function label_ina(): string
    {
        return match ($this) {
            static::ATTEND => 'Hadir',
            static::HESITATE => 'Ragu',
            static::ABSENT => 'Tidak Hadir',
        };
    }
}