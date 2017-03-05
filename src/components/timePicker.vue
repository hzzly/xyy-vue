<template>
    <div class="picker-box">
        <div class="mask" @click="hideTimePicker"></div>
        <div class="picker-box-c">
            <div class="picker-header">
                <div class="picker-prev" @click="preMon"> << </div>
                <div class="picker-year">{{year}}年 {{month}}月</div>
                <div class="picker-next" @click="nextMon"> >> </div>
            </div>
            <div class="picker-content">
                <div class="picker-week">
                    <div class="picker-weekday">日</div>
                    <div class="picker-weekday">一</div>
                    <div class="picker-weekday">二</div>
                    <div class="picker-weekday">三</div>
                    <div class="picker-weekday">四</div>
                    <div class="picker-weekday">五</div>
                    <div class="picker-weekday">六</div>
                </div>
                <div class="picker-con">
                    <div class="picker-day" v-for="pick in picker" 
                        :class="{'outfocus': pick.outfocus, 
                                'today': pick.showday, 
                                'start': showStartEnvfun(pick.dateNum,pick.outfocus), 
                                'end': showEndEnvfun(pick.dateNum,pick.outfocus), 
                                'black': showBlack(pick.dateNum,pick.outfocus), 
                                'half': showHalffun(pick.dateNum,pick.outfocus)}" 
                        @click="checkDay(pick.dateNum,pick.outfocus)">
                        {{pick.dateNum}}
                    </div>
                </div>
            </div>
            <div class="picker-footer">
                <div class="picker-button-today"><span></span>今天</div>
                <div class="picker-button-start"><span></span>开始</div>
                <div class="picker-button-end"><span></span>结束</div>
            </div>
            <div class="confim" @click="confimDate">确定</div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                year: '',
                month: '',
                startEnv: '', //开始日期
                endEnv: '',  //结束日期
                today: '',
                picker: []
            }
        },
        mounted () {
            let date = new Date()
            this.year = date.getFullYear()
            this.month = date.getMonth() + 1
            this.today = date.getDate()
            this.startEnv = this.getTwoDay(this.year + '-' + this.month + '-' + this.today)
            this.endEnv = this.getSixDay(this.year + '-' + this.month + '-' + this.today)

            this.createCalendar(this.year, this.month)
        },
        methods: {
            createCalendar (year, month) {
                this.picker = []
                let picks = []
                let currentMonth = ''
                if(new Date().getFullYear() == year && new Date().getMonth() + 1 == month) {
                    currentMonth = true
                } else {
                    currentMonth = false
                }
                let monthStartDate = this.getFirstDay(year, month)

                var lastMonthRestDay = new Date(year, month - 1, 0).getDate()
                //求上个月剩余多少天显示在本月
                for (var i = 0; i < monthStartDate; i++) {
                    picks.push({
                        dateNum: lastMonthRestDay,
                        outfocus: true
                    });
                    lastMonthRestDay--
                }

                picks = picks.reverse()

                let indexMoth = this.getMonthLen(year, month)
                //本月天数
                for (var i = 1; i <= indexMoth; i++) {
                    let showday = ''
                    if (currentMonth) {
                        if (this.today === i) {
                            showday = true;
                        } else {
                            showday = false;
                        }

                    }
                    if (currentMonth && this.today > i) {
                        picks.push({
                            dateNum: i,
                            outfocus: true,
                            showday: showday
                        });
                    } else {
                        picks.push({
                            dateNum: i,
                            outfocus: false,
                            showday: showday
                        });
                    }
                }
                let nextMonLen = 42 - picks.length
                //下月天数显示在本月
                for (var i = 1; i <= nextMonLen; i++) {
                    picks.push({
                        dateNum: i,
                        outfocus: true
                    })
                }
                this.picker = picks
            },
            preMon () {
                if (this.year == new Date().getFullYear() && this.month <= new Date().getMonth() + 1) {
                    return;
                }
                this.month -= 1;
                if (this.month < 1) {
                    this.year -= 1;
                    this.month = 12;
                }
                this.createCalendar(this.year, this.month);
            },
            nextMon () {
                 this.month += 1;
                if (this.month > 12) {
                    this.year = parseInt(this.year) + 1;
                    this.month = 1;
                }
                this.createCalendar(this.year, this.month);
            },
            checkDay (dateNum, outfocus) {
                if(!outfocus) {
                    let check_day = this.year + '-' + this.month + '-' + dateNum;
                    if (this.dateCompare(this.endEnv, check_day) == 0) { //开始后
                        this.endEnv = check_day;
                        this.showEndEnvfun(dateNum);
                    } else if (this.dateCompare(this.endEnv, check_day) == 3) {  //点结束当天
                        this.startEnv = check_day;
                        this.showHalffun(dateNum)
                    } else if (this.dateCompare(this.startEnv, check_day) == 3) {  //点开始当天
                        this.endEnv = check_day;
                        this.showHalffun(dateNum);
                    } else if (this.dateCompare(this.startEnv, check_day) == 1) {
                        this.startEnv = check_day;
                        this.showStartEnvfun(dateNum);
                    } else if (this.dateCompare(this.startEnv, check_day) == 0 && this.dateCompare(this.endEnv, check_day) == 1) {
                        var disStartEnvLen = this.getDatePeriod(this.startEnv, check_day) - 1;
                        var disSEndEnvLen = this.getDatePeriod(this.endEnv, check_day) - 1;
                        if (disStartEnvLen > disSEndEnvLen) {
                            this.endEnv = check_day;
                            this.showEndEnvfun(dateNum);
                        } else {
                            this.startEnv = check_day;
                            this.showStartEnvfun(dateNum);
                        }
                    }
                }
            },
            //两个日期之间间隔多少天
            getDatePeriod: function (sDate1, sDate2) {
                var aDate, oDate1, oDate2, iDays;

                aDate = sDate1.split("-");
                oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]); //转换为12-18-2016格式
                aDate = sDate2.split("-");
                oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);

                iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
                return iDays;
            },
            //获得每个月的天数
            getMonthLen: function (year, month) {
                let nextMonth = new Date(year, month, 1);
                nextMonth.setHours(nextMonth.getHours() - 1);
                return nextMonth.getDate();
            },
            //获得每个月第一天星期几   0：星期日，1：星期一
            getFirstDay: function (year, month) {
                let firstDay = new Date(year, month - 1, 1);
                return firstDay.getDay();
            },
            //获得每个月的天数
            getMonthLen: function (year, month) {
                let nextMonth = new Date(year, month, 1);
                nextMonth.setHours(nextMonth.getHours() - 1);
                return nextMonth.getDate();
            },
            //计算距离今天的后两天日期
            getTwoDay: function (date) {
                let result = new Date((new Date(date)).getTime() + 2 * 24 * 60 * 60 * 1000);
                return result.getFullYear() + "-" + (result.getMonth() + 1) + "-" + result.getDate();
            },
            //计算距离今天的后六天日期
            getSixDay: function (date) {
                let result = new Date((new Date(date)).getTime() + 6 * 24 * 60 * 60 * 1000);
                return result.getFullYear() + "-" + (result.getMonth() + 1) + "-" + result.getDate();
            },
            confimDate () {
                this.$store.dispatch('showTimePicker', false)
                this.$emit('confirm', this.startEnv, this.endEnv)
            },
            //比较两日期的大小
            dateCompare (date1, date2) {

                var str1 = [];
                var str2 = [];
                str1 = date1.split('-');
                str2 = date2.split('-');
                if (parseInt(str1[0]) == parseInt(str2[0]) && parseInt(str1[1]) == parseInt(str2[1]) && parseInt(str1[2]) == parseInt(str2[2])) {
                    return 3;
                } else {
                    if (parseInt(str1[0]) > parseInt(str2[0])) {
                        return 1;
                    } else if (parseInt(str1[0]) < parseInt(str2[0])) {
                        return 0;
                    } else {
                    }
                    if (parseInt(str1[1]) > parseInt(str2[1])) {
                        return 1;
                    } else if (parseInt(str1[1]) < parseInt(str2[1])) {
                        return 0;
                    } else {
                    }
                    if (parseInt(str1[2]) > parseInt(str2[2])) {
                        return 1;
                    } else if (parseInt(str1[2]) < parseInt(str2[2])) {
                        return 0;
                    } else {
                    }
                    return 0;
                }
            },
            showStartEnvfun (dateNum, outfocus) {
                if (!outfocus) {
                    if (this.startEnv == this.year + '-' + this.month + '-' + dateNum) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            showEndEnvfun (dateNum, outfocus) {
                if (!outfocus) {
                    if (this.endEnv == this.year + '-' + this.month + '-' + dateNum) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            showBlack (dateNum, outfocus) {
                if (!outfocus) {
                    if (this.dateCompare(this.startEnv, this.year + '-' + this.month + '-' + dateNum) == 0 &&
                        this.dateCompare(this.year + '-' + this.month + '-' + dateNum, this.endEnv) == 0) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            showHalffun (dateNum, outfocus) {
                if (!outfocus) {
                    if (this.startEnv == this.year + '-' + this.month + '-' + dateNum && this.endEnv == this.year + '-' + this.month + '-' + dateNum) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            hideTimePicker () {
                this.$store.dispatch('showTimePicker', false)
            }
        },
        computed: {
            
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/function';

.picker-box {
    z-index: 100;
    font-size: 14px;
    .picker-box-c {
        position: fixed;
        background: #fff;
        width: px2rem(700px);
        height: px2rem(870px);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: px2rem(10px);
        z-index: 1002;
        .picker-header {
            display: flex;
            justify-content: space-between;
            height: px2rem(100px);
            line-height: px2rem(100px);
            .picker-prev,
            .picker-next {
                font-size: 10px;
                width: px2rem(200px);
                text-align: center;
            }
            .picker-year {
                color: #76D49B;
                font-weight: 700;
            }
        }
        .picker-content {
            .picker-week {
                display: flex;
                .picker-weekday {
                    width: px2rem(100px);
                    height: px2rem(60px);
                    line-height: px2rem(60px);
                    text-align: center;
                }
            }
            .picker-con {
                display: flex;
                flex-wrap: wrap;
                .picker-day {
                    position: relative;
                    width: px2rem(100px);
                    height: px2rem(80px);
                    line-height: px2rem(80px);
                    margin: px2rem(2px) 0;
                    colors: #555;
                    font-weight: 600;
                    text-align: center;
                }
                .today {
                    &::before {
                        content: " ";
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 0;
                        height: 0;
                        border-top: 8px solid #1486f5;
                        border-left: 8px solid transparent;
                    }
                }
                .start {
                    background: #5ec443;
                }
                .black {
                    background: #e2e2e2;
                }
                .end {
                    background: #d44040;
                }
                .half {
                    background: url('../assets/images/same-day.png') no-repeat;
                    background-size: cover;
                }
                .outfocus {
                    color: #e3e3e3;
                }
            }
        }
        .picker-footer {
            width: 90%;
            height: px2rem(100px);
            line-height: px2rem(100px);
            margin: 0 auto;
            display: flex;
            border-bottom: 1px solid #eee; 
            >div{
                width: 33.33%;
                text-align: center;
            }
            .picker-button-today {
                span {
                    width: 0;
                    display: inline-block;
                    margin-right: px2rem(20px);
                    border-top: 8px solid #0059bc;
                    border-left: 8px solid transparent;
                }
            }
            .picker-button-start,
            .picker-button-end {
                span {
                    width: px2rem(40px);
                    height: px2rem(40px);
                    background: #5ec443;
                    display: inline-block;
                    margin-right: px2rem(20px);
                    vertical-align: middle;
                    margin-bottom: px2rem(5px);
                }
            }
            .picker-button-end {
                span {
                    background: #d44040;
                }
            }
        }
        .confim {
            width: 100%;
            height: px2rem(100px);
            line-height: px2rem(100px);
            text-align: center;
            font-size: 14px;
            color: #76D49B;
            cursor: pointer;
        }
    }
    .mask {
        position: fixed;
	    width: 100%;
	    margin: 0 auto;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    z-index: 1001;
	    background: rgba(0,0,0,.6);
    }
}
</style>