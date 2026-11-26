---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [Elliptic Curve Digital Signature Algorithm, firma ECDSA, firma digitale su curve ellittiche]
tags: [competenza, area/informatica]
---

# ECDSA

> Firma digitale sui punti di una curva ellittica: la firma di $M$ è la coppia $(r,s)$ con $r$ dalla coordinata di $kG$ e $s=(h+rd)/k$; è la firma delle transazioni Bitcoin ed Ethereum.

## Definizione / enunciato
Sono pubblici: la curva, un punto $G$, il numero $n$ dei punti, una funzione hash $h$. Ogni utente ha chiave privata $d$ e chiave pubblica $P=dG$.

**Generazione** della firma di $M$:
1. calcola $h=h(M)$;
2. sceglie a caso $k\in\mathbb Z_n$;
3. calcola $kG=(x,y)$;
4. pone $r=x\bmod n$ e $s=(h+rd)/k\bmod n$;
5. la firma è $(r,s)$.

**Verifica**: $w=s^{-1}=k/(h+rd)$, $u=wh$, $v=wr$, $Q=uG+vP$; si accetta se la prima coordinata di $Q$ modulo $n$ è $r$.

## Formule chiave
$$Q=uG+vP=whG+wr(dG)=\Big(\frac{kh}{h+rd}+\frac{krd}{h+rd}\Big)G=kG=(x,y).$$

## Intuizione
Solo chi conosce $d$ può costruire $s$; la verifica ricostruisce $kG$ usando soltanto $P=dG$. La firma dipende da $h(M)$, quindi vale solo per quel messaggio. La dispensa aggiunge che $k$ va tenuto segreto e mai riusato, altrimenti si compromette la chiave privata (non è scritto nelle slide).

## Come si usa
In Bitcoin Alice firma con ECDSA la transazione che sposta i BTC verso l'indirizzo di Bob; i nodi verificano la firma prima di accettare la transazione. ECDSA è sicuro ma poco flessibile per firme multiple o a soglia; per questo Bitcoin ha aggiunto Schnorr ed Ethereum BLS.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (pp. 31-35, pp. 33-34 verificate sulle pagine renderizzate); `03-Bitcoin.pdf` (p. 17); dispensa §1.9.
- **Crittografia** (magistrale): come il DSA ma sulla curva $T=(p,a,b,G,n,h)$ con $n=\mathrm{ord}(G)$ primo. **Chiavi:** $d\in\{1,\dots,n-1\}$ casuale, $B=d\cdot G$, con $pk=(p,a,b,n,G,B)$ e $sk=d$. **Firma:** chiave effimera $0<K<n$, $R=K\cdot G=(x_R,y_R)$, $r=x_R$, $s=(\mathrm{hash}(M)+d\cdot r)K^{-1}\bmod n$ (se $s=0$ si ricomincia); la firma è $(r,s)$. **Verifica:** $w=s^{-1}$, $u_1=w\,\mathrm{hash}(M)$, $u_2=w\,r\pmod n$, $P=u_1G+u_2B$; la firma è valida se $x_P\equiv r\pmod n$. Funziona perché $P=(\mathrm{hash}(M)+rd)\,w\,G=K\cdot G$. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week12/Crypto12.pdf` (§12.3, p. 6); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto10.pdf` (ECDSA).

## Prerequisiti
- [[Firma digitale]]: schema KeyGen, Sign, Verify
- [[Curva ellittica]]: operazioni sui punti
- [[Problema del logaritmo discreto]]: impedisce di ricavare $d$ da $P$

## Porta a
- [[Transazione Bitcoin]]: firma degli input

## Collegati
- [[Cifratura ElGamal]]: stessa coppia di chiavi e stesso $k$ casuale
- [[Multisignature]]: firme multiple e a soglia, difficili con ECDSA
- [[DSA]]: ECDSA è il DSA trasportato sul gruppo dei punti (Crittografia)
