import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeMute,
  faScroll,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import './page3.css';

const ShlokaCard = ({ shloka, language }) => {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const progressInterval = useRef(null);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      clearInterval(progressInterval.current);
    } else {
      audioRef.current.play();
      startProgressTimer();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const startProgressTimer = () => {
    clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      if (audioRef.current) {
        const currentProgress =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(isNaN(currentProgress) ? 0 : currentProgress);
      }
    }, 100);
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const seekPosition = e.nativeEvent.offsetX / e.target.offsetWidth;
    audioRef.current.currentTime = seekPosition * audioRef.current.duration;
    setProgress(seekPosition * 100);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }

    return () => {
      clearInterval(progressInterval.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <motion.div
      className="shloka-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      whileHover={{
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
        y: -5,
      }}
    >
      <motion.div className="shloka-header">
        <div className="icon-prayer" />
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faScroll} className="icon-scroll" /> Chapter{' '}
          {shloka.chapter}, Verse {shloka.verse}
        </motion.h3>
      </motion.div>

      <motion.div className="sanskrit-container">
        <div className="icon-quote" />
        <motion.div
          className="sanskrit-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="icon-language" /> {shloka.sanskrit}
        </motion.div>
      </motion.div>

      {expanded && (
        <motion.div
          className={`meaning-container ${
            language === 'english' ? 'english' : ''
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {language === 'hindi' ? (
            <p className="shloka-meaning">{shloka.hindiMeaning}</p>
          ) : (
            <>
              <div className="icon-book" />
              <p className="shloka-meaning">{shloka.englishMeaning}</p>
            </>
          )}
        </motion.div>
      )}

      {shloka.audio && (
        <div className="audio-player">
          <div className="progress-bar" onClick={handleSeek}>
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="audio-controls">
            <button
              onClick={togglePlayback}
              className="play-btn"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                className="play-icon"
              />
            </button>

            <div className="time-display">
              {formatTime(audioRef.current?.currentTime || 0)} /{' '}
              {formatTime(audioRef.current?.duration || 0)}
            </div>

            <div className="volume-controls">
              <button
                onClick={toggleMute}
                className="volume-btn"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                <FontAwesomeIcon
                  icon={isMuted ? faVolumeMute : faVolumeUp}
                  className="volume-icon"
                />
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
          </div>
        </div>
      )}

      <motion.div
        className="btn-group"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="toggle-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {expanded ? (
            <>
              <FontAwesomeIcon icon={faChevronUp} className="icon-chevron" />{' '}
              Hide Meaning
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faChevronDown} className="icon-chevron" />{' '}
              Show Meaning
            </>
          )}
        </motion.button>
      </motion.div>

      {shloka.audio && (
        <audio
          ref={audioRef}
          src={shloka.audio}
          onEnded={() => {
            setIsPlaying(false);
            setProgress(0);
            clearInterval(progressInterval.current);
          }}
          onTimeUpdate={() => {
            if (audioRef.current) {
              const currentProgress =
                (audioRef.current.currentTime / audioRef.current.duration) *
                100;
              setProgress(isNaN(currentProgress) ? 0 : currentProgress);
            }
          }}
          onLoadedMetadata={() => {
            if (audioRef.current) {
              audioRef.current.volume = volume;
            }
          }}
        />
      )}
    </motion.div>
  );
};

export default ShlokaCard;
