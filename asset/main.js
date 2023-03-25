/* 
Nama project : Ultah V2
Dibuat oleh : Muhammad Surya Jayadiprana as OCHI
Pesan : Jangan diperjual belikan, karena ini adalah project gratis
*/

$(document).ready(function () {
    // Waktu
    const detik = 1000;
    const menit = detik * 60;
    const jam = menit * 60;
    const hari = jam * 24;

    // Variabel Tampil Waktu
    const hari_ = $("#hari");
    const jam_ = $("#jam");
    const menit_ = $("#menit");
    const detik_ = $("#detik");

    // Tanggal dan Waktu
    let ultah = "March 25, 2023 12:40:00";
    let hitungMundur = new Date(ultah).getTime();
    let x = setInterval(function () {
        let sekarang = new Date().getTime();
        jarak = hitungMundur - sekarang;

        // Tampil hari jam menit detik
        hari_.text(Math.floor(jarak / (hari)));
        jam_.text(Math.floor((jarak % (hari)) / (jam)));
        menit_.text(Math.floor((jarak % (jam)) / (menit)));
        detik_.text(Math.floor((jarak % (menit)) / detik));

        // Kalo waktunya pas
        if (jarak < 0) {
            $("#container").addClass("tampil");
            $("#birthday").removeClass("tampil");
            $.playSound('asset/musik/masakk.mp3');
            $("#waktu").remove();
            $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'asset/style.css'));
            $('.start').click(function () {
                $('.stage1').fadeOut();
                fire_modal('asset/img/cake_modal.png', 'Lets make a cake', 'today is a special day. And I know that you like to make cakes, my Dear. I hope you like it..');
            })

            progress = 1;

            $('.modal_content button').click(function () {
                progress++;
                close_modal(progress)
            })

            function close_modal(callback) {
                modal.css('transform', 'translateY(-50%) scale(0)')
                setTimeout(function () {
                    $('.stage' + callback).fadeIn();
                }, 600)
            }

            function fire_modal(imgurl, title, content) {

                modal = $('.birthday_inner__modal');
                modal.find('h1').html(title);
                modal.find('img').attr('src', imgurl);
                modal.find('p').html(content);
                setTimeout(function () {
                    modal.css('transform', 'translateY(-50%) scale(1)')
                }, 1000)


            }
            klik = 1;
            $(".egg").click(function(){
                    $('.egg').animate({ zIndex: 1,top: '100px' }, 1500);
            });
            $(".salt").click(function(){
                    $('.salt').animate({ zIndex: 1,top: '100px' }, 1500);
            });
            $(".sugar").click(function(){
                    $('.sugar').animate({ zIndex: 1,top: '100px' }, 1500);
            });
            $(".flour").click(function(){
                    $('.flour').animate({ zIndex: 1,top: '100px' }, 1500);
            });
            $(".wotah").click(function(){
                    $('.wotah').animate({ zIndex: 1,top: '100px' }, 1500);
            });


            $('.nex').click(function () {
                    $('.stage2').fadeOut();
                    fire_modal('asset/img/mix_modal.png', 'Niceee', 'Well done my dear, the dough is ready');
            })

            mixing = false;
            mixtimes = 0;

            $('.mixer').click(function () {
                if (mixing == false) {
                    mixing = true
                    mixtimes++;
                    $('.mix_spoon img').addClass('move')
                    setTimeout(function () {
                        $('.mix_spoon img').removeClass('move')
                        mixing = false;
                    }, 1000)
                }
                if (mixtimes == 6) {
                    $('.stage3').fadeOut();
                    fire_modal('asset/img/mix_modal.png', 'Niceee', 'Well done my dear, the cake batter is ready... lets proceed with putting it in the oven (I miss seeing you post the cake you made , hehe)');

                }

            })

            $('.tin').draggable({
                revert: true
            })
            $(".oven").droppable({
                drop: function (event, ui) {
                    $('.stage4,.ne').fadeOut();
                    fire_modal('asset/img/oven_modal.png', 'Ohhh the dough is baked to perfection!', 'Nice my dear... the cake batter looks delicious, its time to add toppings like cream and chocolate');
                }
            })

            bases = 0;
            fillings = 0;

            $('.sponges .item_inner').click(function () {
                $('.sponges').addClass('inactive')
                $('.fillings').removeClass('inactive')
                t = $(this).attr('class').split(' ').pop();
                bases++
                if (bases < 6) {
                    add_sponge(t)
                }
            })

            $('.fillings .item_inner').click(function () {
                $('.fillings').addClass('inactive')
                $('.sponges').removeClass('inactive')
                f = $(this).attr('class').split(' ').pop();
                fillings++
                if (fillings < 7) {
                    add_filling(f)
                }
            })

            function add_sponge(t) {

                $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="sponge sponge-' + t + '"><div></div><div></div><div></div><div></div><div></div></div>')
                $('.sponges h5 span').html(bases)
            }

            $('.startagain').click(function () {
                $('.cakemake').html('<div class="base"></div>');
                bases = 0;
                fillings = 0;
                $('.sponges h5 span').html(bases)
                $('.fillings h5 span').html(fillings)
                $('.fillings').removeClass('inactive')
                $('.sponges').addClass('inactive')
            })

            function add_filling(f) {

                $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="filling filling-' + f + '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>')
                $('.fillings h5 span').html(fillings)
            }

            function fin() {
                $('h1,h2,.options,.startagain,.add,.ne').fadeOut();

                setTimeout(function () {
                    $('.cakemake').fadeIn()
                    $('.cakemake').animate({
                        'margin-top': '0px'
                    })
                }, 1000)
                add_candle()
                $('svg').addClass('text')
            }

            function add_candle() {
                var stages = $('.cakemake > div').length;
                var h = (stages / 2) * 41 + 22 + 'px';
                console.log(stages)
                $('.cakemake').prepend('<div class="candle" ><img src="asset/img/candle.png" /></div>')
                $('svg').show()
                setTimeout(function () {
                    $('.sa').fadeIn()
                }, 2200)
                setTimeout(function () {
                    $('.ne').fadeIn()
                }, 2200)
                
                $.stopSound();
                $.playSound('asset/musik/chongrat.mp3');
                confetti.start();
            }

            $('.add').click(function () {
                fin();
            })

            $('.sa').click(function () {
                window.location.reload();
            })
            // $('.ne').click(function () {
                
            //     window.open('http://localhost/Birthday/Pakai/nurhani-dayanti-birthday-master/index.html');

            // })
            clearInterval(x);
        }
    }, 0)
});
