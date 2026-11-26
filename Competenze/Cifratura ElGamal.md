---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [ElGamal encryption, ElGamal, cifratura in stile ElGamal, ElGamal su curve ellittiche, elliptic curve ElGamal]
tags: [competenza, area/informatica]
---

# Cifratura ElGamal

> Schema di cifratura a chiave pubblica: il mittente maschera il messaggio con $k$ volte la chiave pubblica del destinatario e allega $kG$, così che solo chi conosce la chiave privata può togliere la maschera.

## Definizione / enunciato
Versione su curve ellittiche delle slide. Si fissano una curva $E$ su un campo $\mathbb F_q$ con $q$ grande e un punto $G$ della curva (non serve conoscere il numero dei punti). Ogni utente sceglie a caso $s$ (chiave privata) e pubblica $sG$ (chiave pubblica): Alice $P_A=s_AG$, Bob $P_B=s_BG$.

Alice manda $M$ a Bob:
1. codifica $M$ in un punto $P$ e sceglie un numero casuale $k$;
2. manda a Bob la coppia $(kG,\ P+kP_B)$;
3. Bob moltiplica per $s_B$ il primo termine e lo sottrae dal secondo, ottenendo $P$;
4. Bob decodifica $P$ e ottiene $M$.

## Formule chiave
$$(P+kP_B)-s_B(kG)=P+k s_BG-s_BkG=P.$$
(Il passaggio algebrico è un calcolo esplicitato qui a partire dalla slide.)

## Intuizione
$kP_B=k s_B G$ è un "segreto condiviso" usa e getta: Alice lo calcola da $k$ e $P_B$, Bob da $s_B$ e $kG$. Un osservatore vede $kG$ e $P_B$ ma, per ricavare $k$ o $s_B$, dovrebbe risolvere il logaritmo discreto.

## Come si usa
È l'esempio di cifratura su curva ellittica del corso, costruito come RSA ma sullo spazio dei punti; il numero casuale $k$ va scelto nuovo a ogni messaggio. Le slide citano anche le firme digitali basate su ElGamal.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (p. 29, verificata sulla pagina renderizzata; p. 31 per la firma ElGamal).
- **Crittografia** (magistrale): "textbook Elgamal" (1985) su $GF(p)$, con $g,p$ come in Diffie-Hellman. **Gen:** $A\in\{1,\dots,p-1\}$, $h=g^A$, $pk=h$, $sk=A$. **Enc:** $B$ casuale, $C=(g^B,\ m\cdot h^B)$. **Dec:** $m=c_2/c_1^A$. È un DH ($k=g^{AB}$) usato per mascherare il messaggio, $m\cdot k\bmod p$. La chiave effimera $g^B$ non va riusata, quindi lo schema è probabilistico: se due messaggi condividono $g^B$, chi conosce uno dei due legge l'altro. Attacchi: MITM (attivo); malleabilità, perché $(c_1,s\cdot c_2)$ si decifra in $s\cdot m$, da cui serve un padding; DLP e chiavi effimere riusate (passivi). È usato in GnuPG, OpenSSL e PGP. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week9/Crypto9.pdf` (§9.2.1, pp. 7-8); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (ElGamal).

## Prerequisiti
- [[Curva ellittica]]: somma e multipli di punti
- [[Problema del logaritmo discreto]]: fonda la sicurezza dello schema

## Porta a
- Nessuno.

## Collegati
- [[ECDSA]]: stessa coppia di chiavi $(s, sG)$ e stesso uso di un $k$ casuale, ma per firmare
- [[Scambio di chiavi Diffie-Hellman]]: ElGamal è un DH che maschera il messaggio con $g^{AB}$ (Crittografia)
- [[Firma ElGamal]]: firma costruita sullo stesso problema (Crittografia)
