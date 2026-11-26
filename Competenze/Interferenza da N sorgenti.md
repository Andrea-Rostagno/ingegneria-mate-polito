---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["N-source interference", "reticolo di interferenza", "reticolo di diffrazione", "diffraction grating", "massimi principali", "massimi secondari", "schiera di fenditure"]
tags: [competenza, area/fisica]
---

# Interferenza da N sorgenti

> $N$ sorgenti coerenti in schiera, a passo $a$, danno su uno schermo lontano massimi principali stretti e intensi ($\propto N^2$) per $a\sin\theta=m\lambda$, separati da $N-1$ zeri e $N-2$ massimi secondari: è il principio del reticolo.

## Definizione / enunciato
$N$ onde coerenti $E_j=E_0\sin(kr_j-\omega t)$, $j=1,\dots,N$, da sorgenti in schiera a distanza $a$; schermo a grande distanza ($L\gg a$). Tra sorgenti adiacenti la differenza di fase è $\Phi=k(r_{j+1}-r_j)=ka\sin\theta$. Con i fasori (spezzata inscritta in una circonferenza di centro C) si ottiene l'ampiezza del campo.
- **Massimi principali:** tutti i fasori allineati, $E_R=NE_0$; si annulla il denominatore.
- **Zeri:** i fasori formano un poligono chiuso, $N\Phi/2=m'\pi$; si annulla il numeratore.
- Tra due massimi principali ci sono $N-1$ zeri e quindi $N-2$ **massimi secondari** di ampiezza esigua.
Il **reticolo di interferenza** realizza la schiera con fenditure rettangolari (come nell'esperienza di Young).

## Formule chiave
$$\frac{OQ}{OS}=\frac{\sin(N\Phi/2)}{\sin(\Phi/2)},\qquad E_R=E_0\frac{\sin(N\Phi/2)}{\sin(\Phi/2)},\qquad I(P)\propto E_0^2\frac{\sin^2\left(\frac{N\pi a\sin\theta}{\lambda}\right)}{\sin^2\left(\frac{\pi a\sin\theta}{\lambda}\right)}$$
$$\text{massimi principali: }\sin\theta=\frac{m\lambda}{a},\ m=0,\pm1,\dots,\quad I(\max\ princ.)\propto E_0^2N^2;\qquad \text{zeri: }\sin\theta=\frac{m'\lambda}{Na},\ m'=1,2,\dots(N-1),(N+1),\dots(2N-1),(2N+1),\dots$$
Angoli piccoli: $\sin\theta\approx\theta\approx tg\theta=m\frac\lambda a$, $\;x\approx L\,tg\theta=Lm\frac\lambda a$.

## Intuizione
Più sorgenti ci sono, più la condizione di accordo di fase è selettiva: i massimi principali restano nelle stesse posizioni ma diventano più stretti e intensi. Poiché la posizione dipende da $\lambda$, il reticolo separa i colori.

## Come si usa
Esempio (`40. LEZIONE.pdf` pp. 15-16): luce bianca su $N=100$ fenditure, $a=50\ \mu$m, schermo a $L=2$ m, $\lambda_{blu}=500$ nm, $\lambda_{rosso}=700$ nm. Primo ordine: $x_{Max,blu,1}\approx L\lambda_{blu}/a=20$ mm, $x_{Max,rosso,1}\approx L\lambda_{rosso}/a=28$ mm. Larghezza della banda blu fino al primo zero ($\sin\theta=\frac{N+1}{N}\frac{\lambda_{blu}}{a}$): $\Delta x\approx\frac LN\frac{\lambda_{blu}}a=0{,}2$ mm. Con fenditure di larghezza $b$ la figura di interferenza è modulata da quella di diffrazione di una fenditura.

## Nei corsi
- **Fisica 2** (triennale): tre sorgenti, poi $N$ sorgenti, grafici per $N=2,4,8$, reticolo di interferenza; ripreso nella lezione 40 con diffrazione sovrapposta. Refuso a p. 13 di `39`: la figura indica "$L\ll a$" mentre lo schermo è lontano ($L\gg a$, come a p. 2). Fonti: `triennale/ANNO 2/fisica 2/lezioni/39. LEZIONE.pdf` (pp. 2-13); `triennale/ANNO 2/fisica 2/lezioni/40. LEZIONE.pdf` (pp. 13-16).

## Prerequisiti
- [[Interferenza da due sorgenti]]: generalizzazione da 2 a N sorgenti coerenti

## Porta a
- [[Diffrazione da una fenditura]]: limite di infinite sorgenti con il metodo dei fasori

## Collegati
- [[Potere risolutore]]: larghezza dei massimi del reticolo e separazione dei colori
