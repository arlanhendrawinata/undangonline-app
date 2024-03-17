import React, { useEffect, useRef, useState } from 'react';
import { AlertDialog, AlertDialogContent } from '@/Components/shadcn/ui/alert-dialog';
import { Button } from '@/Components/shadcn/ui/button';
import { useForm } from '@inertiajs/react';
import { CheckCircledIcon, EnvelopeOpenIcon, ReloadIcon } from '@radix-ui/react-icons';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import { BsArrowUp } from 'react-icons/bs';
import DateCountdown from './UO/Components/DateCountdown';
import { CiLocationOn } from 'react-icons/ci';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { Input } from '@/Components/shadcn/ui/input';
import { Textarea } from '@/Components/shadcn/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/Components/shadcn/ui/radio-group';
import { Label } from '@/Components/shadcn/ui/label';
import { ScrollArea } from '@/Components/shadcn/ui/scroll-area';
import { Separator } from '@/Components/shadcn/ui/separator';
import { Badge } from '@/Components/shadcn/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/Components/shadcn/ui/alert';

const UnolClient1 = (props) => {
  console.log(props)
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const guestName = urlParams.get('to');

  const [alertDialog, setAlertDialog] = useState(true)
  const [alert, setAlert] = useState({
    message: '',
    status: false,
  });

  const [playing, setPlaying] = useState(false)
  const audioPlayer = useRef();

  const play = () => {
    if (!playing) {
      setPlaying(true);
      audioPlayer.current.play();
    }
  };

  const stop = () => {
    if (playing) {
      setPlaying(false);
      audioPlayer.current.pause();
    }
  };

  useEffect(() => {

  }, [])

  const attendStatus = [
    {
      name: 'Hadir',
      value: 'attend'
    },
    {
      name: 'Ragu',
      value: 'hesitate'
    },
    {
      name: 'Tidak Hadir',
      value: 'absent'
    },
  ]

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    message: '',
    status: '',
    client_id: 1,
    queryString: queryString
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('dekadi-dira-14.store'), {
      preserveScroll: true,
      onSuccess: (res) => {
        setAlert({
          message: 'Pesan kamu berhasil dikirim.',
          status: true
        });
        setTimeout(() => {
          setAlert({
            message: '',
            status: false
          });
        }, 5000);
        reset()
      }
    });
  };

  const Capitalize = (name) => {
    const arr = name.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2;
  }

  const heroSection = useRef();
  const [opacityScrollT, setOpacityScrollT] = useState(0);

  useEffect(() => {
    const heroHeight = heroSection.current.clientHeight;
    const range = 200;
    const offset = heroHeight / 2;

    const didScrollPage = e => {
      let calcT = 1 - (window.scrollY - offset + range) / range;
      if (calcT > 1) {
        calcT = 0
      } else if (calcT < 0) {
        calcT = 1
      }

      setOpacityScrollT(calcT)

    };
    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);
  return (
    <>
      <div className='relative h-screen bg-[url("/unol/img/PRM08030.jpg")] bg-cover' ref={heroSection}>
        <div className='absolute h-full w-full bg-gradient-to-b from-transparent to-black/40 z-2'></div>
        <div className='absolute bottom-20 flex flex-col items-start h-max w-full text-white z-3 px-5'>
          <h2 className='text-lg font-medium tracking-widest font-suravaram uppercase'>We Are Getting Merried</h2>
          <h1 className='font-cormorant-upright font-medium text-2xl'>Dek Adi & Dira</h1>
          <h5 className='font-medium font-suravaram text-md'>14 April 2024</h5>
        </div>
      </div>

      {/* Begin::Wrapper */}
      <main className='bg-[#dbcebb] px-5'>
        <div className='py-10'>
          <div className='flex flex-col justify-center items-center space-y-4 bg-[#252525] text-white text-center my-5 p-10 rounded-xl'>
            <img src="/unol/assets/dry flower.png" className='w-32' />
            <span className='font-cormorant-upright text-2xl'>Om Swastyastu,</span>
            <p className='text-sm leading-6 font-cormorant-garamond'>Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara Ngidih (Meminang) Pernikahan kami.</p>
          </div>

        </div>
        {/* End::Wrapper */}

        {/* Begin::Detail mempelai */}
        <div className='space-y-10'>
          {/* Begin::Mempelai Pria */}
          <div>
            <div className='bg-[url("/unol/img/PRM08357.png")] bg-cover bg-bottom h-96 w-full rounded-xl'></div>
            <div className='text-center pt-4 space-y-4'>
              <h2 className='font-cormorant-upright text-2xl'>Kadek Surya Adi Putra</h2>
              <div className='space-y-2 font-cormorant-garamond font-bold'>
                <span className='block'>Putra dari pasangan :</span>
                <span className='block italic'>I Wayan Juwena</span>
                <span className='block'>&</span>
                <span className='block italic'>Ni Nengah Sutarmiasih</span>
              </div>
            </div>
          </div>
          {/* End::Mempelai Pria */}

          {/* Begin::Mempelai Wanita */}
          <div>
            <div className='bg-[url("/unol/img/PRM08135.jpg")] bg-cover bg-top h-96 w-full rounded-xl'></div>
            <div className='text-center pt-4 space-y-4'>
              <h2 className='font-cormorant-upright text-2xl'>Ni Putu Eka Indira Dewi</h2>
              <div className='space-y-2 font-cormorant-garamond font-bold'>
                <span className='block'>Putri dari pasangan :</span>
                <span className='block italic'>I Ketut Sarjana</span>
                <span className='block'>&</span>
                <span className='block italic'>Alm Ni Wayan Putu Sujani</span>
              </div>
            </div>
          </div>
          {/* End::Mempelai Wanita */}
        </div>
        {/* End::Detail mempelai */}

        {/* Begin::Coundown Timer */}
        <div className='relative h-[28rem] flex justify-center items-start bg-[url("/unol/img/PRM08295.jpg")] bg-center bg-cover rounded-t-full mt-20 z-20'>
          <div className='absolute h-full w-full rounded-t-full bg-gradient-to-t from-transparent to-white/40 z-2'></div>
          <div className='relative flex flex-col justify-center items-center p-3 pt-10 space-y-5'>
            <h2 className='font-lora text-lg font-bold font-cormorant-upright'>Menuju Hari Bahagia</h2>
            <DateCountdown targetDate={new Date("2024-04-14T15:00:00").getTime()} />
          </div>
        </div>
        {/* End::Coundown Timer */}

        <div className='py-10'>
          <p className='font-cormorant-garamond'>Merupakan suatu kehormatan dan kebahagiaan kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.</p>
        </div>

        {/* Begin::Detail Undangan */}
        <div className='flex flex-col justify-center items-end text-right space-y-4 bg-[#252525] text-white p-10 py-10 rounded-l-[30%]'>
          <img src="/unol/assets/dry flower 2.png" className='w-40' />
          <span className='block w-full font-cormorant-upright text-2xl'>Ngidih (Meminang)</span>
          <div className='font-cormorant-garamond text-sm space-y-2'>
            <span className='block'>Minggu, 14 April 2024</span>
            <span className='block'>09:00 WITA - Selesai</span>
            <span className='block'>Jl. Pulau Misol Gg. III A No.11, Dauh Puri Kauh, Denpasar Barat</span>
          </div>
          <a href="https://maps.app.goo.gl/m9QCSQMri4swg8C39" className='flex flex-row justify-center items-center font-cormorant-garamond bg-white text-black text-sm py-1 px-4 font-bold rounded'><CiLocationOn className='w-4 h-4 mr-1' />Lihat Lokasi</a>
        </div>
        {/* Begin::Detail Undangan */}

        <div className='py-10 text-center space-y-4'>
          <p className='font-cormorant-garamond'>Atas kehadiran Bapak/Ibu/Saudara/i kami ucapkan terima kasih.</p>
          <span className='block font-cormorant-upright font-bold italic text-2xl'>Om Canthi Canthi Canthi Om</span>
        </div>

        {/* section content */}
        <SlideshowLightbox className="container grid grid-cols-1 sm:grid-cols-3 gap-2 mx-auto">
          {props.image.map((item, index) => (
            <img key={index} src={`/unol/img/${item}`} alt={item} />
          ))}
        </SlideshowLightbox>

        <div className='relative text-center text-black bg-white flex flex-col justify-between space-y-5 py-10 mt-10 rounded-xl'>
          <div>
            <h2 className='text-xl font-suravaram italic'>Sampai jumpa dihari bahagia kami</h2>
          </div>
          <img src="/unol/assets/dekadi-dira-logo.svg" alt="" className='w-48 block m-auto' />
          <span className='block text-black text-center font-cormorant-garamond'>Made with ♡ by Undang Online</span>
        </div>

        {/* Begin::RSVP */}
        {/* wishes */}
        <div className='mt-16 pb-10 space-y-10'>
          {/* section header */}
          <div className='text-center'>
            <h2 className='font-cormorant-upright text-2xl font-bold mb-0'>Wishes</h2>
          </div>

          {/* section content */}
          <div className='shadow bg-white rounded-lg p-6'>
            {
              (errors.name || errors.message || errors.status) && <span className='block text-sm mb-2 text-red-400'>*Anda diharuskan mengisi semua kolom inputan</span>
            }
            <form onSubmit={submit} className='space-y-5'>
              <Input type="text" placeholder="Nama Anda" value={data.name} onChange={(e) => setData('name', e.target.value)} />
              <Textarea placeholder="Ketik pesan Anda disini." value={data.message} onChange={(e) => setData('message', e.target.value)} />
              <RadioGroup value={data.status} onValueChange={(val) => setData('status', val)}>
                {attendStatus.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.value} id={item.name} />
                    <Label htmlFor={item.name} className="font-cormorant-garamond">{item.name}</Label>
                  </div>
                ))}
              </RadioGroup>
              {processing
                ? <Button className="w-full" size="sm" disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </Button>
                : <Button size={'sm'} className='w-full bg-[#252525] font-cormorant-garamond text-base'>Submit</Button>
              }
            </form>
          </div>
          {props.wishes.length > 0 &&
            <ScrollArea className="h-72 w-full rounded-md">
              <div>
                {props.wishes.map((item, index, row) => (
                  <div className={`bg-white py-3 px-4 rounded-xl ${index + 1 !== row.length ? 'mb-3' : ''}`}>
                    <div className='flex justify-between items-start'>
                      <span className='font-cormorant-upright font-bold'>{item.name}</span>
                      <Badge variant="secondary" className="font-cormorant-garamond">{attendStatus.filter((val) => val.value == item.status)[0].name}</Badge>
                    </div>
                    <p className='text-sm mb-0 mt-2 font-cormorant-garamond'>{item.message}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          }
        </div>
        {/* End::RSVP */}
      </main>

      {/* audio */}
      <audio ref={audioPlayer} id="myAudio">
        <source src="/unol/music/dek ulik - tresna kanti pawah.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className='flex flex-col space-y-2 fixed bottom-0 right-0 m-8 z-30'>
        <div className='h-10 w-10 bg-gray-900 text-white drop-shadow-lg rounded-full flex justify-center items-center' onClick={(!playing ? play : stop)}>
          {
            playing
              ? <GiSpeaker className='w-5 h-5' />
              : <GiSpeakerOff className='w-5 h-5' />
          }
        </div>
        {opacityScrollT != 0 &&
          <button onClick={() => window.scrollTo(0, 0)} style={{ opacity: opacityScrollT }} className="transition duration-800 ease-in-out">
            <div className="h-10 w-10 bg-gray-900 text-white drop-shadow-lg rounded-full flex justify-center items-center">
              <BsArrowUp />
            </div>
          </button>}
      </div>

      {/* dialog openner */}

      <AlertDialog open={alertDialog} onOpenChange={setAlertDialog}>
        <AlertDialogContent className="h-screen bg-[url('/unol/img/PRM08252.jpg')] bg-cover bg-center-center p-0 border-0">
          <div className='relative w-full h-full'>
            <div className='absolute top-0 h-full w-full bg-white/90'></div>
            <div className='relative h-screen text-center text-black flex flex-col justify-between p-10 space-y-4'>
              <div>
                <h2 className='text-xl font-suravaram uppercase'>Undangan Ngidih (Meminang)</h2>
              </div>
              <img src="/unol/assets/dekadi-dira-logo.svg" alt="" className='w-48 block m-auto' />
              <div className='flex flex-col space-y-5'>
                <div className='flex flex-col space-y-4'>
                  <div className='flex flex-col font-cormorant-garamond'>
                    <span>Kepada Yth.</span>
                    <span>Bapak/Ibu/Saudara/i</span>
                  </div>
                  <span className='font-bold text-lg font-cormorant-upright'>{guestName && Capitalize(guestName)}</span>
                </div>
                <Button className="w-full bg-yellow-700 font-cormorant-garamond" onClick={() => {
                  setAlertDialog(!alertDialog)
                  play()
                  window.scrollTo(0, 0)
                }}>
                  <EnvelopeOpenIcon className='w-4 h-4 mr-2' />
                  Buka Undangan
                </Button>
              </div>
              <span className='block text-black text-right font-cormorant-garamond'>Made with ♡ by Undang Online</span>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* end of dialog */}

      <div className={`w-full fixed px-2 py-2 top-0 duration-500 ease-in-out z-[99] ${alert.status ? 'translate-y-0' : '-translate-y-40'}`}>
        <Alert>
          <CheckCircledIcon className="h-5 w-5 mt-1" />
          <AlertTitle className="text-lg font-cormorant-upright">Berhasil!</AlertTitle>
          <AlertDescription className="font-cormorant-garamond">
            {alert.message}
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
}

export default UnolClient1;
